import React from "react";
import ReactDOM from "react-dom";
import { Store } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory, History } from "history";
import IStore from "./models/i-store";
import rootStore from "./stores/root-store";

import App from "./views";

type RootElementType = HTMLElement | null;

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async (): Promise<void> => {
    const initialState: Partial<IStore> = {};
    const history: History = createBrowserHistory();
    const store: Store<IStore> = rootStore(initialState, history);
    const rootEl: RootElementType = document.getElementById("root");

    const render = (Component: typeof App, el: RootElementType): void => {
        ReactDOM.render(
            <Provider store={store}>
                <Component history={history} />
            </Provider>,
            el
        );
    };

    render(App, rootEl);
})();
