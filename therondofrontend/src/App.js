import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Articles from "./screens/Articles";
import News from "./screens/News";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Articles" element={<Articles />} />
                    <Route path="/News" element={<News />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

