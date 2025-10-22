import React from "react";
import { createRoot } from "react-dom/client";
import Body from "./Body.js";
import Header from "./Header.js";

var reactElement = document.getElementById("container");
var reactRoot = createRoot(reactElement);
const App = ()=>{
    return(
        <>
        <Header/>
        <Body/>
        </>

    );
};
reactRoot.render(<App/>);