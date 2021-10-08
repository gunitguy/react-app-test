import { put, select, SagaReturnType } from "redux-saga/effects";
import IAction from "../../models/i-action";
import UserAction from "./user-action";
import UserService from "./user-service";

import { currentUserSelector } from "../../selectors/user-selector";

export default class UserSaga {
    public static *fetchUser(
        action: IAction<void> | null = null
    ) {
        try {
            const result: SagaReturnType<typeof UserService.fetchUser> = yield UserService.fetchUser();

            // With this yield select test fails
            const currentUser: ReturnType<typeof currentUserSelector> = yield select(currentUserSelector);

            console.log(currentUser);

            yield put(UserAction.fetchUserSuccess(result));
        } catch (err) {
            yield put(UserAction.fetchUserFailed(err as Error));
        }
    }
}
