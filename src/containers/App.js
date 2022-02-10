import React from "react";
import Toplearn from "./Toplearn";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <Router >
            <Toplearn />
            <ToastContainer/>
        </Router>
    );
};

export default App;