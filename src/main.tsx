import * as React from "react";
import ReactDom from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement.innerHTML) {
    const root = ReactDom.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
