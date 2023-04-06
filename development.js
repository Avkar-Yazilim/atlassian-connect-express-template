const ngrok = require("ngrok");
const { spawn } = require("child_process");
const nodemon = require("nodemon");
const fs = require("fs");
const AddonOperations = require("./util/addon");

if (!fs.existsSync(".env.development")) {
    console.error(
        "Please create a .env.development file in the root of the project."
    );
    process.exit(1);
}
require("dotenv").config({ path: ".env.development" });

let addonJson = require("./atlassian-connect.json");

let credentials;
if (fs.existsSync("./credentials.json")) {
    credentials = require("./credentials.json");
}

const checkEnvironmentVariables = (type) => {
    const requiredEnvironmentVariables = {
        ngrok: ["NGROK_AUTH_TOKEN", "PORT"],
        serveo: ["SERVEO_SUBDOMAIN", "PORT"],
    };
    const missingEnvironmentVariables = requiredEnvironmentVariables[
        type
    ].filter((variable) => process.env[variable] === undefined);
    if (missingEnvironmentVariables.length > 0) {
        console.error(
            `Please set the following environment variables: ${missingEnvironmentVariables.join(
                ", "
            )}`
        );
        process.exit(1);
    }
};

const hostReverseProxy = async (type, callback) => {
    checkEnvironmentVariables(type);
    switch (type) {
        case "ngrok":
            await ngrokReverseProxy(
                process.env.NGROK_AUTH_TOKEN,
                process.env.PORT,
                callback
            );
            break;
        case "serveo":
            await serveoReverseProxy(
                process.env.SERVEO_SUBDOMAIN,
                process.env.PORT,
                callback
            );
            break;
        default:
            console.error("Please specify a valid reverse proxy type.");
            process.exit(1);
    }
};

const ngrokReverseProxy = async (auth_token, port, callback) => {
    await ngrok
        .connect({
            authtoken: auth_token,
            proto: "http",
            addr: port,
        })
        .then(async (url) => {
            console.log(`Reverse proxy started at ${url}`);
            callback(url);
        })
        .catch((error) => {
            console.error(error);
            process.exitCode = 1;
        });
};

const serveoReverseProxy = async (subdomain, port, callback) => {
    ls = spawn("ssh", [
        "-R",
        `${subdomain}:80:localhost:${port}`,
        "serveo.net",
        "-T",
    ]);
    ls.stdout.on("data", (data) => {
        if (!data.includes("Forwarding HTTP traffic from https://")) return;
        const url = `https://${subdomain}.serveo.net`;
        console.log(`Reverse proxy started at ${url}`);
        callback(url);
    });
    ls.stderr.on("data", (data) => {
        console.error(`Error: ${data}`);
        process.exitCode = 1;
    });
};

let installAddon = async (addonKey, registerUrl, credentials) => {
    const addonOperations = new AddonOperations(
        addonKey,
        registerUrl,
        credentials
    );
    await addonOperations.loginToBitbucket();
    await addonOperations.installAddon();
    await addonOperations.closeBrowser();
};

let uninstallAddon = async (addonKey, credentials) => {
    const addonOperations = new AddonOperations(addonKey, "", credentials);
    await addonOperations.loginToBitbucket();
    await addonOperations.uninstallAddon();
    await addonOperations.closeBrowser();
};

let runServer = () => {
    nodemon({
        ext: "js json",
        exec: `node -r esm app.js`,
    }).on("restart", (files) => {
        console.group("Application restarted due to:");
        files.forEach((file) => console.log(file));
        console.groupEnd();
    });
};

const main = async () => {
    switch (process.argv[2]) {
        case "addon":
            const action = process.argv[3];
            if (action === undefined) {
                console.error("Please specify an action.");
                process.exit(1);
            }
            switch (action) {
                case "install":
                    const registerUrl = process.argv[4];
                    if (registerUrl === undefined) {
                        console.error("Please specify a register URL.");
                        process.exit(1);
                    }
                    await installAddon(
                        addonJson.key,
                        registerUrl,
                        credentials.bitbucket
                    );
                    break;
                case "uninstall":
                    await uninstallAddon(addonJson.key, credentials.bitbucket);
                    break;
            }
            process.exit(0);
        case "host":
            const type = process.argv[3];
            if (type === undefined) {
                console.error("Please specify a reverse proxy type.");
                process.exit(1);
            }
            await hostReverseProxy(type, (url) => {
                process.env.AC_LOCAL_BASE_URL = url;
                runServer();
                if (process.argv[4] && process.argv[4] === "install") {
                    installAddon(
                        addonJson.key,
                        url + "/atlassian-connect.json",
                        credentials.bitbucket
                    );
                }
            });

            break;
        default:
            console.error("Please specify a valid command.");
            process.exit(1);
    }
};

main();
