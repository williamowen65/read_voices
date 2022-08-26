import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./assets/resets.css";
import { BrowserRouter } from "react-router-dom";

const rootElement =
    document.getElementById("app");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
