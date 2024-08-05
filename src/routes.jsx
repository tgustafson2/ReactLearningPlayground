import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import AddUser from "./AddUser";


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
    {
        path: "profile",
        element: <Profile />,
    },
    {
        path: "add-user",
        element: <AddUser />
    }
]

export default routes;