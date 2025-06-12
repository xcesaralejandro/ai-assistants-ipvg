import { createBrowserRouter, Navigate } from "react-router";
import AssistantsPage from "./pages/AssistantsPage"
import ChatPage from "./pages/ChatPage"
import ErrorPage from "./pages/ErrorPage";

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
        path: '*',
        element: <ErrorPage />
    }
])