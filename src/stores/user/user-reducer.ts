import UserAction, { UserActionUnion } from "./user-action";
import IAction from "../../models/i-action";
import IUserReducerState from "./i-user-reducer-state";
import {UserModel} from "./models/user-model";

export default class UserReducer {
    private static readonly _initialState: IUserReducerState = {
        error: null,
        currentUser: null,
        isLoadingUser: false
    };

    public static reducer = (
        state: IUserReducerState = UserReducer._initialState,
        action: IAction<UserActionUnion>
    ): IUserReducerState => {
        switch (action.type) {
            case UserAction.FETCH_USER:
                return {
                    ...state,
                    isLoadingUser: true
                };
            case UserAction.FETCH_USER_SUCCESS:
                return {
                    ...state,
                    isLoadingUser: false,
                    currentUser: action.payload as UserModel
                };
            case UserAction.FETCH_USER_FAILED:
                return {
                    ...state,
                    isLoadingUser: false,
                    error: action.payload as any
                };
            default:
                return state;
        }
    };
}
