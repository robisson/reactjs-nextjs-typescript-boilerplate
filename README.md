# ReactJs - NextJs - Typescript boilerplate
This application is developed with NextJs ReactJs Framework and use server side renderer

### Building with
* [`Typescript 3.9`](https://www.typescriptlang.org)
* [`Reactjs`](https://reactjs.org)
* [`Next.js`](https://nextjs.org)
* [`Enzyme`](https://enzymejs.github.io/enzyme)
* [`Jest`](https://jestjs.io)
* [`Redux`](https://redux.js.org)
* [`Redux Saga`](https://redux-saga.js.org)

### Requirements
* Nodejs 11 or higher
* Yarn

## How to use it?

```bash
#install dependences
yarn 

#run app
yarn dev

#Open browser localhost:3000
```

### Via docker-compose

```bash
cd docker

docker-compose up -d

#Open browser localhost:3000
```

### Workflow for development


```bash
#run tests
yarn test

#run tests in watch mode
yarn test:watch

#run tests with code coverage
yarn test:coverage

#run application
```

**Note:** For better debugging experience install [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR) in yout chrome

### Conventions for tests
Tests must be placed within the __tests__ directory on each component

**Note:** Tests for page components must be within src /__ tests __/ componentName

## Enviroments variables
```bash
# In the backend
NAME=VALUE

# In the frontend. Need to use prefix 'NEXT_PUBLIC_'
NEXT_PUBLIC_ANALYTICS_ID=VALUE
```

More information on [`NextJs documentation`](https://nextjs.org/docs/basic-features/environment-variables)

### Workflow for production

```bash
#run tests
yarn test

# build application
yarn build

#run application
yarn start
```

## Basic structure of a component (Form component example)
```bash
src/
   |--/components
      |-- Form
        |-- __tests__
            |-- Form.test.tsx
            |-- actions.test.ts
            |-- reducer.test.ts
        |-- Form.tsx
        |-- actions.ts
        |-- reducer.ts
   |-- state-management
     |-- Sagas
       |-- __tests__
         | -- Form.test.ts
       |-- Form
```



**Note:**
* If the component does not make use of state, actions and reducer are not necessary
* If the component does not need to load data with http requests, sagas are not necessary

### More informations on Wikipage