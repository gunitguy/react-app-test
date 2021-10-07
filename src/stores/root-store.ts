import { applyMiddleware, createStore, Middleware, Store } from "redux";
import { History } from "history";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

import IStore from "../models/i-store";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

export default (initialState: Partial<IStore>, history: History): Store<IStore> => {
    const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware();
    const middleware: Middleware[] = [routerMiddleware(history), sagaMiddleware].filter(Boolean);

    const store: Store<IStore> = createStore(
        rootReducer(history),
        initialState as any,
        composeWithDevTools(applyMiddleware(...middleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
