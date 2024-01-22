import Dashboard from "../pages/Dashboard"
import Orders from "../pages/Orders"
import Categories from "../pages/Categories"
import SingleCategory from "../pages/SingleCategory"
import Products from "../pages/Products"
import AddProduct from "../pages/AddProduct"
import Customers from "../pages/Customers"
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
    { path: '/categories/:CategorieName', element: <SingleCategory /> },
    { path: '/products', element: <Products /> },
    { path: '/products/add', element: <AddProduct /> },
    { path: '/Customers', element: <Customers /> },
    { path: '/login', element: <Login /> },
    { path: '/*', element: <NotFound /> },
]

export default routes