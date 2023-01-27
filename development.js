const ngrok = require("ngrok");
const nodemon = require("nodemon");
var fs = require("fs");
var AddonOperations = require("./util/addon_operations");

if (!fs.existsSync(".env.development")) {
    console.error("Please create a .env.development file in the root of the project.");
    process.exit(1);
}
require("dotenv").config({ path: ".env.development" });
let addonJson = require("./atlassian-connect.json");

let credentials;
if (fs.existsSync("./credentials.json")) {
    credentials = require("./credentials.json").bitbucket;
}

if (process.env.NGROK_AUTH_TOKEN === undefined) {
    console.error("Please set the NGROK_AUTH_TOKEN environment variable.");
    process.exit(1);
}

ngrok
    .connect({
        authtoken: process.env.NGROK_AUTH_TOKEN,
        proto: "http",
        addr: "3000",
    })
    .then(async (url) => {
        process.env.AC_LOCAL_BASE_URL = url;
        registerUrl = url + "/atlassian-connect.json";
        runServer();
        if (credentials) {
            await installAddon(addonJson.key, registerUrl, credentials);
        }
        onExit();
    })
    .catch((error) => {
        console.error("Error opening ngrok tunnel: ", error);
        process.exitCode = 1;
    });

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

let installAddon = async (addonKey, registerUrl, credentials) => {
    const addonOperations = new AddonOperations(addonKey, registerUrl, credentials);
    await addonOperations.loginToBitbucket();
    await addonOperations.installAddon();
    await addonOperations.closeBrowser();
};

let onExit = () => {
    process.on("SIGINT", () => {
        ngrok.kill().then(() => {
            process.exit(0);
        });
    });
    process.on("exit", () => {
        deleteDevDB(process.env.DEVELOPMENT_DB);
    });
};

let deleteDevDB = (dbName) => {
    if (fs.existsSync(dbName)) {
        console.log("Deleting temporary development database.");
        fs.unlinkSync(dbName);
    }
};
