# How to run

1. Install [git], [node], [npm].
2. Run `npm install`.
3. Create copy of `.env` file with name `.env.development`
4. Go to [ngrok], create account.
    - Go to [authtoken] page and copy token.
    - Set this token to **`NGROK_AUTH_TOKEN`** value in `.env.development` file.
5. Set **`DEVELOPMENT_DB`** value to anything you want *(eg. `dev_db.sqlite`)*.
6. Run `npm run dev` command on terminal to start development server.
7. Copy the value of `Plugin register url` from terminal to register it to Bitbucket. This url has to be *https*.

# How to Register Addon to Bitbucket in Development

1. Go to [bitbucket-addon-management] page and enable development mode.
2. Go to [bitbucket-apps] page and click **Register an app** button.
3. Paste `Plugin register url` that you copied and click **Register app**.
4. Click **INSTALLATION URL** and install addon.


[git]: http://git-scm.com/
[node]: https://nodejs.org/
[npm]: https://github.com/npm/npm#super-easy-install
[ngrok]: https://ngrok.com/
[authtoken]: https://dashboard.ngrok.com/get-started/your-authtoken
[bitbucket-addon-management]: https://bitbucket.org/account/addon-management
[bitbucket-apps]: https://bitbucket.org/account/apps


