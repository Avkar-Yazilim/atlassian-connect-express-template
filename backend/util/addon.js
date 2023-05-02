const puppeteer = require("puppeteer");

class AddonOperations {
    constructor(addonKey, addonRegisterUrl, credentials) {
        this.addonKey = addonKey;
        this.addonRegisterUrl = addonRegisterUrl;
        this.credentials = credentials;
        this.browser = null;
        this.loggedIn = false;
    }

    async loginToBitbucket() {
        console.log("Logging in to bitbucket.");
        this.browser = await puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true,
        });
        const loginPage = await this.browser.pages().then((pages) => pages[0]);
        try {
            // Login to bitbucket
            await loginPage.goto(
                "https://id.atlassian.com/login?application=bitbucket"
            );
            await loginPage
                .waitForSelector("#username")
                .then(
                    async () =>
                        await loginPage.type(
                            "#username",
                            this.credentials.email
                        )
                );
            await loginPage.click("#login-submit");
            await loginPage
                .waitForSelector("#password", { visible: true })
                .then(
                    async () =>
                        await loginPage.type(
                            "#password",
                            this.credentials.password
                        )
                );
            await loginPage.click("#login-submit");
            await loginPage.waitForNavigation();
            this.loggedIn = true;
        } catch (error) {
            console.log(error);
        }
    }

    async installAddon() {
        if (!this.loggedIn) {
            console.error("Please login to bitbucket first.");
            return;
        }
        let success = true;
        console.log("Registering addon.");
        const installationUrl = `https://bitbucket.org/site/addons/authorize?addon_key=${this.addonKey}`;

        try {
            if (!this.credentials.developmentMode) {
                // Go to addon management page
                const page = await this.browser.newPage();
                await page.goto(
                    `https://bitbucket.org/${this.credentials.workspaceId}/workspace/settings/addon-management`
                );
                await page.waitForNavigation();
                // Enable development mode
                const elementHandle1 = await page.waitForSelector(
                    "#settings-frame",
                    { visible: true }
                );
                const frame1 = await elementHandle1.contentFrame();
                await frame1.waitForSelector("#id-enable-development-mode", {
                    visible: true,
                });
                await frame1.$eval(
                    "#id-enable-development-mode",
                    async (check) => (check.checked = true)
                );
                console.log("Development mode enabled.");
            }

            // Register addon
            const addonRegisterPage = await this.browser.newPage();
            await addonRegisterPage.goto(
                `https://bitbucket.org/${this.credentials.workspaceId}/workspace/settings/applications`
            );
            await addonRegisterPage.waitForNavigation();
            await addonRegisterPage.waitForNetworkIdle({ idleTime: 1000 });
            const elementHandle2 = await addonRegisterPage.waitForSelector(
                "#settings-frame",
                { visible: true }
            );
            const frame2 = await elementHandle2.contentFrame();
            const installedAddonBox = await frame2
                .$(
                    `xpath///a[text()="${installationUrl}"]/ancestor::div[@class="boxed-list--item"]`
                )
                .then((element) => element);
            if (installedAddonBox) {
                // If addon is already installed, remove it.
                console.log("Addon already registered. Removing it.");
                await installedAddonBox
                    .waitForSelector(
                        "xpath///span[contains(text(), 'Remove')]/ancestor::button",
                        { visible: true }
                    )
                    .then(async (button) => await button.click());
                await frame2.waitForSelector("xpath///div[@role='dialog']", {
                    visible: true,
                });
                await frame2
                    .$$(
                        "xpath///span[contains(text(), 'Remove')]/ancestor::button"
                    )
                    .then(
                        async (buttons) => await buttons.slice(-1)[0].click()
                    );
                await addonRegisterPage.waitForNetworkIdle({ idleTime: 1000 });
            }

            const isAnotherAddonInstalled = !!(await frame2.$(".aui-group"));
            if (isAnotherAddonInstalled) {
                // If another addon is already installed, register app button should be visible.
                await frame2
                    .waitForSelector(
                        "xpath///span[contains(text(), 'Register app')]/ancestor::button",
                        {
                            visible: true,
                        }
                    )
                    .then(async (button) => await button.click());
            } else {
                await frame2
                    .waitForSelector(
                        "xpath///span[contains(text(), 'Register an app')]/ancestor::button",
                        {
                            visible: true,
                        }
                    )
                    .then(async (button) => await button.click());
            }

            await frame2
                .waitForSelector("xpath///input[@placeholder='https://']", {
                    visible: true,
                })
                .then(async (input) => await input.type(this.addonRegisterUrl));

            if (isAnotherAddonInstalled) {
                await frame2
                    .$$(
                        "xpath///span[contains(text(), 'Register app')]/ancestor::button",
                        { visible: true }
                    )
                    .then(async (buttons) => await buttons[1].click());
            } else {
                await frame2
                    .waitForSelector(
                        "xpath///span[contains(text(), 'Register app')]/ancestor::button",
                        {
                            visible: true,
                        }
                    )
                    .then(async (button) => await button.click());
            }

            await addonRegisterPage.waitForResponse(async (response) => {
                if (response.url().includes("/apps")) {
                    if (response.status() !== 200) {
                        const error_message = await response
                            .json()
                            .then((data) => data.error.message);
                        console.error(
                            `Error while registering addon: ${error_message}`
                        );
                        success = false;
                    }
                    return true;
                }
            });
            if (!success) return;

            // Go to the installation page
            const installationPage = await this.browser.newPage();
            await installationPage.goto(installationUrl);
            await installationPage
                .waitForSelector("button#grant-access:not([disabled])")
                .then(async (button) => await button.click());
            console.log("Addon registered successfully.");
        } catch (error) {
            console.log(error);
        }
    }

    async uninstallAddon() {
        if (!this.loggedIn) {
            console.error("Please login to bitbucket first.");
            return;
        }
        console.log("Removing addon.");
        const installationUrl = `https://bitbucket.org/site/addons/authorize?addon_key=${this.addonKey}`;
        // Go to addon page
        const addonRegisterPage = await this.browser.newPage();
        await addonRegisterPage.goto(
            `https://bitbucket.org/${this.credentials.workspaceId}/workspace/settings/applications`
        );
        await addonRegisterPage.waitForNavigation();
        await addonRegisterPage.waitForNetworkIdle({ idleTime: 1000 });
        const elementHandle2 = await addonRegisterPage.waitForSelector(
            "#settings-frame",
            { visible: true }
        );
        const frame2 = await elementHandle2.contentFrame();
        const installedAddonBox = await frame2
            .$(
                `xpath///a[text()="${installationUrl}"]/ancestor::div[@class="boxed-list--item"]`
            )
            .then((element) => element);
        if (installedAddonBox) {
            // If addon is already installed, remove it.
            await installedAddonBox
                .waitForSelector(
                    "xpath///span[contains(text(), 'Remove')]/ancestor::button",
                    { visible: true }
                )
                .then(async (button) => await button.click());
            await frame2.waitForSelector("xpath///div[@role='dialog']", {
                visible: true,
            });
            await frame2
                .$$("xpath///span[contains(text(), 'Remove')]/ancestor::button")
                .then(async (buttons) => await buttons.slice(-1)[0].click());
            await addonRegisterPage.waitForNetworkIdle({ idleTime: 1000 });
        }
        console.log("Addon removed successfully.");
    }

    async closeBrowser() {
        await this.browser.close();
    }
}

module.exports = AddonOperations;
