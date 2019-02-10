# Little Brown Book Shop

I was assigned to implement a POS(Point of Sale) system for our client who own a shop name "Little Brown Book Shop". They need a precise system, easy to use and also elegant user interface.

This Project are implemented in `Veu.js` and this is **my first time** building web application using this framework. (I use ReactJS for 2.5 years before)

This project, I use the `Vue CLI` to create the project and these are the libraries I chose to use

##### Production

- [Vue](https://vuejs.org/) as a core framework
- [Vuex](https://vuex.vuejs.org/) for state management in the application
- [Vuelidate](https://monterail.github.io/vuelidate/) Simple, lightweight model-based validation for Vue.js

##### Development

- [TypeScript](https://www.typescriptlang.org/) (typed superset of JavaScript)
- [Babel](https://babeljs.io/) Next generation JavaScript compiler
- [EsLint]() Pluggable JavaScript linter
- [Prettier](https://prettier.io/) the code formatter
- [Jest](https://jestjs.io/) a very good JavaScript Testing Framework
- [Firebase](https://firebase.google.com/) for hosting this application

and etc.

---

## This project is **Live** on 🔥 Firebase 🔥

I used Firebase's hosting-service to deploy this application. Please feel free to check it out!

https://little-brown-pos.firebaseapp.com/

---

Or if you want to check the code. Please follow these steps

## Project setup

After pull the code from git repository. Please install the dependency using the following command

```
yarn install
```

### Compiles and hot-reloads for development

This following command are used for the developer who want to start the development mode. Once you start, when we made the changes to any file in project. The application will hot-reloads automatically.

```
yarn run serve
```

\*in development mode. You need to start `json-webserver` to start the REST api service.

```
yarn json-server
```

### Compiles and minifies for production

This following command are used for compile and produce the bundle of files that are very suitable to deploy to production. (files will stay in `/dist` folder after running this command)

```
yarn run build
```

### Lints and fixes files

Force the codes to follow the rules by running this command.

```
yarn run lint
```

### Run the unit tests

```
yarn run test:unit
```
