import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import ErrorBoundary from "./components/errorBoundary";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <Toaster />
                <App />
            </QueryClientProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
