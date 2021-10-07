import React from "react";
import { History } from "history";

import Router from "./routes/router";

type Props = {
    history: History;
}

const App: React.VFC<Props> = ({ history }) => (<React.StrictMode><Router history={history} /></React.StrictMode>);

export default App;
