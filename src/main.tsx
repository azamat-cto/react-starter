import * as React from "react";
import ReactDom from "react-dom/client";
import "./style/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import { router } from "./router";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement.innerHTML) {
    const root = ReactDom.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                    {import.meta.env.DEV && (
                        <ReactQueryDevtools initialIsOpen={false} />
                    )}
                </QueryClientProvider>
            </Provider>
        </React.StrictMode>,
    );
}
