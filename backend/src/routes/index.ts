import { AddOn } from "atlassian-connect-express";
import { Router } from "express";
import lifecycleRouter from "./lifecycle";
import moduleRouter from "./modules";
import webhookRouter from "./webhooks";

function routes() {
    const rootRouter = Router();

    rootRouter.get("/healthcheck", function (_req, res) {
        res.sendStatus(200);
    });

    rootRouter.get("/", function (_req, res) {
        res.format({
            "text/html": function () {
                res.redirect("/atlassian-connect.json");
            },
            "application/json": function () {
                res.redirect("/atlassian-connect.json");
            },
        });
    });

    return rootRouter;
}

export default function createRouter(addon: AddOn) {
    const router = Router();
    router.use(routes());
    router.use(lifecycleRouter(addon));
    router.use(webhookRouter(addon));
    router.use(moduleRouter(addon));
    return router;
}
