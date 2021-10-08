import React, {Dispatch} from "react";
import {useDispatch, useSelector} from "react-redux";

import IAction from "../../models/i-action";
import UserAction from "../../stores/user/user-action";
import {currentUserSelector} from "../../selectors/user-selector";

import * as styles from "./styles.scss";

const Home: React.VFC = () => {
    const dispatch: Dispatch<IAction<UserAction>> = useDispatch();
    const user = useSelector(currentUserSelector);

    const handleClick = () => {
        // @ts-ignore
        dispatch(UserAction.fetchUser());
    }

    return (
        <div className={styles.home}>
            <h1>Welcome page!</h1>
            <button type="button" onClick={handleClick}>Click me to fetch fake User DATA!</button>
            {user && (
                <div>{user.displayName}</div>
            )}
        </div>
    );
};

export default Home;
