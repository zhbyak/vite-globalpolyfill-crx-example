<div align="center">
  <br>
 <img src="https://raw.githubusercontent.com/sinanbekar/browser-extension-react-typescript-starter/main/public/images/extension_128.png" alt="Browser Extension React & TypeScript Starter" width="128">
  <br>
  <h2>
    Browser Extension <br>
    React & TypeScript Starter
    <br>
  </h2>
</div>

<p align="center">A cross-platform (Chrome, Firefox, Edge, Opera, Brave) web browser extension (Manifest V3 and Manifest V2) starter kit with hot reload support, built with React, Typescript, Redux, Vite, ESLint, Prettier, TailwindCSS, Jest and more! </p>
<hr />

<div align="center" >
  <a href="https://github.com/sinanbekar/browser-extension-react-typescript-starter/actions">
    <img src="https://github.com/sinanbekar/browser-extension-react-typescript-starter/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
    &nbsp;
  <a>
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome">
  </a>
    &nbsp;
  <a href="https://github.com/sinanbekar/browser-extension-react-typescript-starter/blob/main/LICENSE">
    <img src="https://img.shields.io/apm/l/atomic-design-ui.svg" alt="MIT License">
  </a>

</div>

<p align="center">
  <a href="#features">Features</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#important-notes">Important Notes</a> ·
  <a href="#license">License</a>
</p>

## Features

- **Instant HMR** (hot reload)[^1]
- Write once run on any browser
- Global Redux support with persist option. Effortless communication between content, background, popup, options, and more pages.
- Provides a basic content example and popup, options, and welcome pages with all React
- Latest Manifest V3 support
- Manifest V2 support (beta)
- Dynamic manifest.json
- Includes ESLint configured to work with TypeScript and Prettier
- Includes stylelint and commitlint configured
- Includes tests with Jest

#### Built with

- React
- TypeScript
- Redux (toolkit and redux-persist)
- TailwindCSS
- Vite
- Jest
- ESLint
- Prettier
- stylelint
- commitlint
- commitizen
- simple-git-hooks (lightweight husky alternative)
- nano-staged

[^1]: While fully supported and stable in most cases, rarely hard reloading is recommended.

## Browser Support

| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](/) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](/) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](/) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](/) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](/) |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| ✔                                                                                             | ✔ (Beta)                                                                                         | ✔                                                                                       | ✔                                                                                          | ✔                                                                                          |

## Quick Start

> **Warning** **Please see [Important Notes](#important-notes) before start using.**

Ensure you have

- [Node.js](https://nodejs.org) 14 or later installed
- [Yarn](https://yarnpkg.com) installed

### Use the Template

#### GitHub Template

[Create a repo from this template on GitHub](https://github.com/sinanbekar/browser-extension-react-typescript-starter/generate).

**_or_**

#### Clone to local

If you prefer to do it manually with the cleaner git history

> **Note** If you don't have yarn installed, run: npm install -g yarn

```bash
npx degit sinanbekar/browser-extension-react-typescript-starter my-web-extension
cd my-web-extension
git init
```

Then run the following:

- `yarn install` to install dependencies.
- `yarn dev` to start the development server.
- `yarn build` to build an unpacked extension.

- **Load extension in Chrome (Chromium)**

  - Go to the browser address bar and type `chrome://extensions`
  - Check the `Developer Mode` button to enable it.
  - Click on the `Load Unpacked Extension` button.
  - Select your `dist` folder in the project root.

- **Load extension in Firefox**

  - Go to the browser address bar and type `about://debugger`
  - Click on the `Load Temporary Add-on` button.
  - Select your `dist_firefox` folder in the project root.

### Available Commands

- `yarn clean` to remove dist folder. `dev` and `build` commands call this command.
- `yarn ci:test` to run lint & unit test & type checking in ci environment. `ci:test:lint`, `ci:test:style`, `ci:test:unit` commands also available.
- `yarn format` to fix code with eslint, prettier and stylelint.
- `yarn lint` to call ESLint, Prettier and stylelint.
- `yarn test` for testing.

## Important Notes

This starter includes experimental packages and is currently in development. You can see changes in this repo often for now.

Please use with caution.

#### [@eduardoac-skimlinks/webext-redux](https://github.com/eduardoacskimlinks/webext-redux)

> **Note** It is a fork of [webext-redux](https://github.com/tshaddix/webext-redux) with Manifest V3 support and is currently in release candidate (RC).
>
> Please see https://github.com/tshaddix/webext-redux/pull/282
>
> **Warning** Do not update to react-redux version 8.x, it is not supported for now and is **break** your application.

### Bundling

#### [@crxjs/vite-plugin](https://github.com/crxjs/chrome-extension-tools)

> **Note** This plugin powers the development side of this starter.
>
> docs: https://crxjs.dev/vite-plugin
>
> Special thanks to [@jacksteamdev](https://github.com/jacksteamdev) and contributors for this amazing plugin.

## Contributing

This repository is following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

## License

MIT © [Sinan Bekar](https://sinan.engineer)

## How to Polifill nodejs build-in modules with vite:

https://medium.com/@ftaioli/using-node-js-builtin-modules-with-vite-6194737c2cd2

same problems:
https://github.com/crxjs/chrome-extension-tools/issues/617

https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/quick-starts/react-vite-modal-quick-start

https://github.com/crxjs/chrome-extension-tools/discussions/461

https://gist.github.com/FbN/0e651105937c8000f10fefdf9ec9af3d

Uncaught SyntaxError: Identifier 'Buffer' has already been declared
https://stackoverflow.com/questions/77186812/uncaught-syntaxerror-identifier-buffer-has-already-been-declared