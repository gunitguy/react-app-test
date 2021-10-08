import { RouterState } from "connected-react-router";
import IUserReducerState from "../stores/user/i-user-reducer-state";

export default interface IStore {
    readonly router: RouterState;
    readonly user: IUserReducerState;
}
