# Requirements

1. Install [git], [node], [npm] and [ngrok].
2. Run `npm install`.
3. Run `ngrok http 3000` and take note of the proxy's `https://..` base url.
4. Run `AC_LOCAL_BASE_URL=https://THE_NGROK_BASE_URL node app.js` from the
repository root.


[git]: http://git-scm.com/
[node]: https://nodejs.org/
[npm]: https://github.com/npm/npm#super-easy-install
[ngrok]: https://ngrok.com/

