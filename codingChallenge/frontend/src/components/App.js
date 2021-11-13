import React, {Component} from "react";
import { render } from "react-dom";
import { useState } from "react";

export default function App() {
    
    return (<div className="center">
            The app works
        </div>)
}

//render the App component into the app div
const appDiv = document.getElementById("app");
render(<App/>, appDiv);