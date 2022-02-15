import React, { useEffect } from "react";
import Toplearn from "./Toplearn";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import $ from 'jquery'

const App = () => {

    useEffect(() => {
            require('../utils/script');
    }, [])
    return (
        <Router >
            <Toplearn />
            <ToastContainer/>
        </Router>
    );
};

export default App;