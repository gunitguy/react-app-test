import IAction from "../../models/i-action";
import {UserModel} from "./models/user-model";

export type UserActionUnion = void | UserModel | Error;

enum UserActionTypes {
    FETCH_USER = "UserAction.FETCH_USER",
    FETCH_USER_SUCCESS = "UserAction.FETCH_USER_SUCCESS",
    FETCH_USER_FAILED = "UserAction.FETCH_USER_FAILED"
}

export default class UserAction {
    public static readonly FETCH_USER = UserActionTypes.FETCH_USER;

    public static readonly FETCH_USER_SUCCESS = UserActionTypes.FETCH_USER_SUCCESS;

    public static readonly FETCH_USER_FAILED = UserActionTypes.FETCH_USER_FAILED;

    public static fetchUser(): IAction<undefined> {
        return {
            type: UserAction.FETCH_USER
        };
    }

    public static fetchUserSuccess(model: UserModel): IAction<UserModel> {
        return {
            payload: model,
            type: UserAction.FETCH_USER_SUCCESS
        };
    }

    public static fetchUserFailed(error: Error): IAction<Error> {
        return {
            payload: error,
            type: UserAction.FETCH_USER_FAILED,
            error: true
        };
    }
}
