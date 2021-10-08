import { UserModel } from "./models/user-model"

export default interface IUserReducerState {
    readonly error: Error | null;
    readonly currentUser: UserModel | null;
    readonly isLoadingUser: boolean;
}
