

<h5 align="center">FoodRunner</h5>
<h3 align="center">Grocery Delivery Service</h3>


## Getting Started

Prerequisites:

- Make sure you have [Node.js](https://nodejs.org) installed
- Install the latest version of [Expo](https://expo.io/learn)
  `npm install --global expo-cli@latest`
- [Recommended] Install [yarn](https://legacy.yarnpkg.com/docs/install)
  `curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.21.1`
  Note: This will install [v1.x](https://github.com/yarnpkg/yarn/releases) since v2 is not yet compatible with React Native.
- [Get an API key](https://help.shopify.com/en/api/getting-started/authentication/private-authentication#generate-credentials-from-the-shopify-admin) for the Shopify Storefront API for your Shopify store.

Clone the repository:

```sh
git clone git@github.com:sellflow/sellflow.git
cd sellflow
```

Make a file `.env.json` in the root of the project, based on [the example file](https://github.com/sellflow/sellflow/tree/master/.env-example.json). This will contain your Shopify API Key (mentioned above).

```sh
cp .env-example.json .env.json
```

Install dependencies:

```sh
yarn && yarn apollo:generate
```

Run the app:

```sh
yarn start
```

- Fork the repository.
- Follow the Getting Started instructions above.
- Use your favorite code editor to develop a feature or fix.
- Commit your change to a branch.
- Run the tests:
  `yarn test-full`
- Push to your fork and create a PR.

## License

MIT. Copyright (c) [KodeFox, Inc.](https://github.com/kodefox)
