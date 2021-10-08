import { combineReducers, Reducer, ReducersMapObject } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import IStore from "../models/i-store";
import UserReducer from "./user/user-reducer";

export default (history: History): Reducer<IStore> => {
    const reducerMap: ReducersMapObject = {
        router: connectRouter(history),
        user: UserReducer.reducer
    };

    return combineReducers(reducerMap);
};
