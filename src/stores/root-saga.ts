import { all, ForkEffect, AllEffect } from "redux-saga/effects";

export default function* rootSaga(): Generator<AllEffect<ForkEffect>, void> {
    const filteredSagas: ForkEffect[] = [
    ].filter(Boolean);

    yield all(filteredSagas);
}
