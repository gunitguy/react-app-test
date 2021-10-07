import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";

import RouteEnum from "../../constants/route-enum";

import HomePage from "../home";
import NotFound from "../not-found";

type Props = {
    history: History;
}

const Router: React.VFC<Props> = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={RouteEnum.Home} component={HomePage} />
                <Route component={NotFound} />
            </Switch>
        </ConnectedRouter>
    );
};

export default Router;
