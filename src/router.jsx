import { createBrowserRouter, Navigate } from "react-router";
import AssistantsPage from "./pages/AssistantsPage"
import ChatPage from "./pages/ChatPage"
import ErrorPage from "./pages/ErrorPage";
import ExampleResult from "./pages/ExampleResult";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/assistants" replace />,
    },
    {
       path: "/assistants",
       Component: AssistantsPage,
    },
    {
       path: "/chat/:assistant_id",
       Component: ChatPage,
    },
    {
       path: "/example-result",
       Component: ExampleResult,
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])