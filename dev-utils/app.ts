#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import AddonOperations from "./addon";
import getCredentials from "./credentials";

const credentials = getCredentials();
const addonOperations = new AddonOperations(credentials);

interface InstallArgs {
    appKey: string;
    registerUrl: string;
}

interface UninstallArgs {
    appKey: string;
}

yargs(hideBin(process.argv))
    .command<InstallArgs>(
        "install",
        "Install the application",
        (yargs) => {
            return yargs
                .option("appKey", {
                    alias: "k",
                    description: "the appKey for the application",
                    demandOption: true,
                    type: "string",
                })
                .option("registerUrl", {
                    alias: "u",
                    description: "the registerUrl for the application",
                    demandOption: true,
                    type: "string",
                });
        },
        (argv) => {
            console.log(
                `Installing app with appKey: ${argv.appKey} and registerUrl: ${argv.registerUrl}`
            );

            addonOperations.install(argv.appKey, argv.registerUrl);
        }
    )
    .command<UninstallArgs>(
        "uninstall",
        "Uninstall the application",
        (yargs) => {
            return yargs.option("appKey", {
                alias: "k",
                description: "the appKey for the application",
                demandOption: true,
                type: "string",
            });
        },
        (argv) => {
            console.log(`Uninstalling app with appKey: ${argv.appKey}`);
            const addonOperations = new AddonOperations(credentials);
            addonOperations.uninstall(argv.appKey);
        }
    )
    .demandCommand()
    .scriptName("dev-cli")
    .help()
    .alias("help", "h").argv;
