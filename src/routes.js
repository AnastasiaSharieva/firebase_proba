import Login from "./components/Login";
import Comments from "./components/Comments";


export const publickRoutes = [
    {
        path: '/login',
        Component: Login,
    }
]

export const privatekRoutes = [
    {
        path: '/comments',
        Component: Comments,
    }
]