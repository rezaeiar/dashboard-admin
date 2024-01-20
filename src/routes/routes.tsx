import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"

type RoutesType = {
    path: string,
    element: JSX.Element
}

const routes: RoutesType[] = [
    { path: '/', element: <Dashboard /> },
    { path: '/login', element: <Login /> },
]

export default routes