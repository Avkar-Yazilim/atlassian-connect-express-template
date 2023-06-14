import ace from "atlassian-connect-express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import errorHandler from "errorhandler";
import express from "express";
import { create } from "express-handlebars";
import http from "http";
import morgan from "morgan";
import path from "path";
import expiry from "static-expiry";
import routes from "./routes";

import dotenv from "dotenv";
dotenv.config({ path: ".env" });

process.env.PWD = process.env.PWD || process.cwd();

const app = express();
const addon = ace(app, {
    config: {
        descriptorTransformer: (descriptor, config) => {
            // make descriptor transformations here
            return descriptor as any;
        },
    },
});

// See config.json
const port = process.env.PORT;
app.set("port", port);

// Configure Handlebars
const viewsDir = __dirname + "/views";
const hbs = create({
    helpers: {
        //  Add an hbs helper to fingerprint static resource urls
        furl: function (url: string) {
            return app.locals.furl(url);
        },
    },
    extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", viewsDir);

// Log requests, using an appropriate formatter by env
const devEnv = app.get("env") == "development";
app.use(morgan(devEnv ? "dev" : "combined"));

// Include request parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Gzip responses when appropriate
app.use(compression());

// Include atlassian-connect-express middleware
app.use(addon.middleware());

// Mount the static files directory
// Anything in ./public is served up as static content
const staticDir = path.join(__dirname, "public");

// Enable static resource fingerprinting for far future expires caching in production
app.use(expiry(app, { dir: staticDir, debug: devEnv }));
app.use(express.static(staticDir));

if (devEnv) {
    app.use(errorHandler());
}

app.use(routes(addon));

http.createServer(app).listen(port, () => {
    console.log("App server running at " + addon.config.localBaseUrl());
    console.log(
        "Plugin register url : " +
            addon.config.localBaseUrl() +
            "/atlassian-connect.json"
    );
});
