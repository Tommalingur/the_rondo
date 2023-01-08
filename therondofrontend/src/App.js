import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Articles from "./screens/Articles";
import News from "./screens/News";
import Users from "./screens/Users";
import SignUp from "./screens/SignUp";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Articles" element={<Articles />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="/SignUp" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

