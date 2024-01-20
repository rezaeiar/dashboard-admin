import Dashboard from "../pages/Dashboard"
import Orders from "../pages/Orders"
import Categories from "../pages/Categories"
import Login from "../pages/Login"
import NotFound from "../pages/404"

type RoutesType = {
    path: string,
    element: JSX.Element
}

const routes: RoutesType[] = [
    { path: '/', element: <Dashboard /> },
    { path: '/orders', element: <Orders /> },
    { path: '/categories', element: <Categories /> },
    { path: '/login', element: <Login /> },
    { path: '/*', element: <NotFound /> },
]

export default routes