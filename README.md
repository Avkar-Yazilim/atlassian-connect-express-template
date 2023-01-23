# How to run

1. Install [git], [node], [npm].
2. Run `npm install`.
3. Create copy of `.env` file with name `.env.development`
4. Go to [ngrok], create account and verify your e-mail via sent message to your e-mail
    - Go to [authtoken] page and copy token.
    - Set this token to **`NGROK_AUTH_TOKEN`** value in `.env.development` file.
5. Set **`DEVELOPMENT_DB`** value to anything you want *(eg. `dev_db.sqlite`)* in `.env.development` file.
6. Set project `key`, `name` and any other parameters in atlassian-connect.json
6.1. Run `npm run dev` command on terminal to start development server. (FAIL if e-mail is not verified for [ngrok])
7. Copy the value of `Plugin register url` from terminal to register it to Bitbucket. This url has to be *https*.

# How to Register Addon to Bitbucket in Development

1. Go to [bitbucket-addon-management] page and enable development mode.
2. Go to [bitbucket-apps] page and click **Register an app** button.
3. Paste `Plugin register url` that you copied and click **Register app**.
4. Click **INSTALLATION URL** and install addon.

## Registering after new run
Ngrok server gives temporary link for every run. So, it will be renewed after server closed.
1. Go to [bitbucket-apps] and remove addon.
2. Register addon with new `Plugin register url`.

[git]: http://git-scm.com/
[node]: https://nodejs.org/
[npm]: https://github.com/npm/npm#super-easy-install
[ngrok]: https://ngrok.com/
[authtoken]: https://dashboard.ngrok.com/get-started/your-authtoken
[bitbucket-addon-management]: https://bitbucket.org/account/addon-management
[bitbucket-apps]: https://bitbucket.org/account/apps


