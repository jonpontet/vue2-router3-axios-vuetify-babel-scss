## Vue 2, Vue Router, Axios, Vuetify & SCSS starter

How to implement Vue 2 with Vue Router, an example API (with Axios), and Vuetify with custom SCSS.

Also included are example unit tests with Jest and end-to-end tests with Cypress.

## What's included

- Vue 2
- Vue Router 3.2
- Vuetify
- API integration (with Axios)
- SCSS theming
- Jest unit tests
- Cypress e2e tests

## How to use it

- Run `npm run api` to launch the API
- Run `npm run serve` to launch a webserver for the app
- Open up your browser to `http://localhost:8080` (normally)
- Make your changes to any SCSS or JS files in `src` and the app will automatically reload

### Testing

- Run `npm run test:unit` to launch the unit tests
- Run `npm run test:e2e` to launch the e2e tests

## All dependencies

### Prod

```text
"axios": "^0.20.0",
"core-js": "^3.6.5",
"fruit-api": "^1.1.15",
"vue": "^2.6.11",
"vue-router": "^3.2.0",
"vuetify": "^2.2.11"
```

### Dev

```text
"@vue/cli-plugin-babel": "^4.5.0",
"@vue/cli-plugin-e2e-cypress": "~4.5.0",
"@vue/cli-plugin-eslint": "^4.5.0",
"@vue/cli-plugin-router": "~4.5.0",
"@vue/cli-plugin-unit-jest": "~4.5.0",
"@vue/cli-plugin-vuex": "~4.5.0",
"@vue/cli-service": "^4.5.0",
"@vue/eslint-config-prettier": "^6.0.0",
"@vue/test-utils": "^1.0.3",
"babel-eslint": "^10.1.0",
"eslint": "^6.7.2",
"eslint-plugin-prettier": "^3.3.1",
"eslint-plugin-vue": "^6.2.2",
"prettier": "^2.2.1",
"sass": "^1.26.5",
"sass-loader": "^8.0.2",
"vue-cli-plugin-vuetify": "^2.0.7",
"vue-template-compiler": "^2.6.11",
"vuetify-loader": "^1.3.0"
```