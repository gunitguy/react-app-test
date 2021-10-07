import { combineReducers, Reducer, ReducersMapObject } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import IStore from "../models/i-store";

export default (history: History): Reducer<IStore> => {
    const reducerMap: ReducersMapObject = {
        router: connectRouter(history)
    };

    return combineReducers(reducerMap);
};
