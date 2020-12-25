import { AppRegistry,Text } from "react-native";
import React from "react";
// import AppA from "./AppA";
import ReactDOM from "react-dom";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import store from "./src/store/store";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Navigate } from './src/navigator/navigate.page';


export default App = () => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    return (
        
        <Provider store={store}>
            <>
                <Navigate />

            </>
        </Provider>
    );

}

