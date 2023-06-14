import { AddOn } from "atlassian-connect-express";
import { Router } from "express";

export default function routes(addon: AddOn) {
    const webhookRouter = Router();

    webhookRouter.post("/webhook", addon.authenticate(), function (req, res) {
        console.log("Webhook event: ", req.body.event);
        res.sendStatus(204);
    });

    return webhookRouter;
}
