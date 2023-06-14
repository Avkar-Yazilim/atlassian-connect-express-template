import { AddOn } from "atlassian-connect-express";
import { Router } from "express";

export default function routes(addon: AddOn) {
    const moduleRouter = Router();

    moduleRouter.get(
        "/connect-example",
        addon.authenticate(),
        function (req, res) {
            let httpClient = addon.httpClient(req);
            httpClient.get("/2.0/user/", function (err, resp, data) {
                try {
                    const json_data = JSON.parse(data);
                    res.render("connect-example", {
                        title: "Atlassian Connect",
                        displayName: json_data.display_name,
                        repoPath: req.query.repoPath,
                    });
                } catch (e) {
                    console.log(e);
                    res.sendStatus(500);
                }
            });
        }
    );

    return moduleRouter;
}
