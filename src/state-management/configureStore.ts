import { createStore, applyMiddleware, Store } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

const initializeStore: Function = (initialState: Object = {}): Store => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares =
    process.env.NODE_ENV === "production"
      ? applyMiddleware(sagaMiddleware)
      : composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store: Store = createStore(reducer, initialState, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default initializeStore;
