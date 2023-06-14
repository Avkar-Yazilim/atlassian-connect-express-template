import { AddOn } from "atlassian-connect-express";
import { Router } from "express";
import Database from "../db";

export default function routes(addon: AddOn) {
    const lifecycleRouter = Router();
    const database = new Database(addon);

    lifecycleRouter.post("/installed", async (req, res, next) => {
        // Use api.bitbucket.org instead of the deprecated bitbucket.org/api
        req.body.baseUrl = req.body.baseApiUrl;
        const clientKey = req.body.clientKey;

        const client = await database.getAddonSettingByClientKey(clientKey);
        if (client) {
            console.log("Client exists. Updating client.");
            await database.updateClient(clientKey, req.body);
            res.sendStatus(200);
        } else {
            next();
        }
    });

    lifecycleRouter.post("/uninstalled", async (req, res) => {
        const clientKey = req.body.clientKey;
        const client = await database.getAddonSettingByClientKey(clientKey);
        if (client) {
            console.log("Client exists. Removing client.");
            await database.removeClient(clientKey);
            res.sendStatus(200);
        }
    });

    return lifecycleRouter;
}
