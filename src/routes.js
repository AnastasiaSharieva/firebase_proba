import Login from "./components/Login";
import Chat from "./components/Chat";


export const publickRoutes = [
    {
        path: '/login',
        Component: Login,
    }
]

export const privatekRoutes = [
    {
        path: '/chat',
        Component: Chat,
    }
]