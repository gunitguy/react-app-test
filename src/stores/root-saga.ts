import { all, takeLatest, ForkEffect, AllEffect } from "redux-saga/effects";
import UserAction from "./user/user-action";
import UserSaga from "./user/user-saga";

export default function* rootSaga(): Generator<AllEffect<ForkEffect>, void> {
    const filteredSagas: ForkEffect[] = [
        takeLatest(UserAction.FETCH_USER, UserSaga.fetchUser),
    ].filter(Boolean);

    yield all(filteredSagas);
}
