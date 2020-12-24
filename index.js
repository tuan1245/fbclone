import { AppRegistry } from "react-native";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import store from "./src/store/store";

// const ReduxApp = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
//  )

//  AppRegistry.registerComponent(appName, () => ReduxApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
