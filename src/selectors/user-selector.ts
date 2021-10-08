import {createSelector, Selector} from "reselect";

import IStore from "../models/i-store";
import {UserModel} from "../stores/user/models/user-model";

export const currentUserSelector: Selector<IStore, UserModel | null> = createSelector(
    (state: IStore) => state.user,
    user => user.currentUser
);
