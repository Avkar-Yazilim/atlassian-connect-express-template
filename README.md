# Atlassian Bitbucket Cloud Plugin/Add-on Template
This template is an enhanced version of Atlassian's own template for developing Bitbucket Cloud plugins. It is written in Node.js and Typescript and uses Express.js as a web framework. It is also using [atlassian-connect-express] library for Atlassian Connect Express framework.

## Additional Features
- **Easy to use reverse proxy:** By using [Serveo] instead of [ngrok] for reverse proxy, free subdomain usage was provided, eliminating the need for reinstallation at every reboot.
- **Modern UI development:** A React-based UI development environment with [Vite] as an alternative to outdated handlebars-based UI development.
- **Database operations:** Examples of database operations with [sequelize] library are provided.
- **Hot reload:** Automatic reflection of both UI and Server code changes through [Vite] and [nodemon].
- **Addon operations:** A CLI tool that automates addon installation/deletion operations with headless browser operations via [puppeeteer].
- **Dockerization:** Get the whole environment up and running with a single command via [Docker].
- **Lifecycle management:** Proper management of install/uninstall lifecycle hooks.

# How to run
Each component in the project can run on its own, in a container with docker and integrated with docker-compose.

## On Docker

1. Run `cp .env.example .env` command in main directory.
2. Run `docker-compose up` command in main directory.

## On Local System

### Backend

1. Run `npm install` in `backend` folder.
2. Run `cp .env.example .env` command.
3. Set **`PORT`**, **`AC_LOCAL_BASE_URL`**, **`DATABASE_URL`** values in `.env` file.

        PORT: Port number of the server. (e.g. 3000)
        AC_LOCAL_BASE_URL: Base url of the server. (e.g. http://addon.serveo.net)
        DATABASE_URL: Postgres database url. (e.g. postgres://postgres:postgres@localhost:5432/postgres)

4. Set project `key`, `name` and any other parameters in atlassian-connect.json
5. You can run the server with `npm start` command or `npm run dev` with nodemon to enable hot-reload.

### Frontend

1. Run `npm install` in `frontend` folder.
3. Run `npm run build` to build the project.

### CLI(dev-utils)

1. Run `npm install` in `dev-utils` folder.
2. Run `cp .env.example .env` command.
2. Set your bitbucket credentials.
3. Run `npm install -g .` to install the CLI globally.
4. Then you can use defined functions from command-line.

### Serveo

1. Run `ssh -R <subdomain>:80:localhost:<port> serveo.net` command to start reverse proxy.

# How to Register Addon in Development
After running the server, you can register the addon in development mode with two different methods.

## Manual Registration

1. Go to [bitbucket-addon-management] page and enable development mode.
2. Go to [bitbucket-apps] page and click **Register an app** button.
3. Paste `Plugin register url` that you copied and click **Register app**.
4. Click **INSTALLATION URL** and install addon.

## Automatic Registration

You can use dev-utils CLI to automate addon registration process with docker or without docker.
After se


**Warning:** If an addon is installed with same project key before, it will be automatically uninstalled before re-install.


<!-- # Common Issues -->

[ngrok]: https://ngrok.com/
[bitbucket-addon-management]: https://bitbucket.org/account/addon-management
[bitbucket-apps]: https://bitbucket.org/account/apps
[puppeteer]: https://pptr.dev/
[docker]: https://www.docker.com/
[nodemon]: https://nodemon.io/
[sequelize]: https://sequelize.org/
[vite]: https://vitejs.dev/
[serveo]: https://serveo.net/
[atlassian-connect-express]: https://bitbucket.org/atlassian/atlassian-connect-express