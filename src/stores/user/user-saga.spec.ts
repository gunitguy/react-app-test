import {runSaga} from "redux-saga";

import UserSaga from "./user-saga";
import UserService from "./user-service";
import UserAction from "./user-action";
// import * as selectors from "../../selectors/delivery-settings/delivery-settings-selectors";
import IAction from "../../models/i-action";

describe("UserSaga - fetchUser", () => {
    jest.mock("./user-service");

    it("should call api and dispatch success action", async () => {
        const dummyResult = {
            foo: "bar"
        } as any;

        const mockFetchUser = jest.fn().mockResolvedValueOnce(dummyResult);
        UserService.fetchUser = mockFetchUser;

        const dispatched: IAction<any>[] = [];
        const task = runSaga(
            {
                dispatch: action => dispatched.push(action as IAction<any>)
            },
            UserSaga.fetchUser as any,
            {
                payload: {}
            }
        );

        await task.toPromise();

        expect(mockFetchUser).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([UserAction.fetchUserSuccess(dummyResult)]);
    });
});
