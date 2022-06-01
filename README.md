# Vite + TailwindCSS (no framework)

**Update:** A `pnpm-lock.yaml` file was added to the root of the project. If possible use `pnpm` over `npm`. You might like it better. See [the docs 📝](https://pnpm.io/motivation) if interested. If not, delete this file.

`npm start` will...start the `localhost:3000` server.

See the `// TODO` in [`tailwind.config.js`](./tailwind.config.js).

Basically, `index.html` is the entry point for the app, and all the rest of the stuff goes into `src` in whatever other directories you want, if any.

If you want to load Tailwind from the HTML, you may need to switch this to something like: `content: ["./index.html"],`. If your Tailwind styles aren't loading, it's probably something here. More ℹ️ info in the [Tailwind docs](https://tailwindcss.com/docs/content-configuration).

Other than that, there is some opinionated/standard stuff included for ESLint and Prettier. These are wired up to do some automatic things in VS Code via [`settings.json`](./.vscode/settings.json). For example, as soon as you leave the file it will auto save, format and even fix linting stuff for you. If that's too much, you may want to reconfigure it.

Finally, there are a few [recommended extensions](./.vscode/extensions.json). You'll probably want these.

Hope it helps. Give it a ⭐, will ya? 🤓
