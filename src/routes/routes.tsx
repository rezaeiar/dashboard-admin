import Dashboard from "../pages/Dashboard"
import Orders from "../pages/Orders"
import Categories from "../pages/Categories"
import SingleCategory from "../pages/SingleCategory"
import Products from "../pages/Products"
import AddProduct from "../pages/AddProduct"
import Customers from "../pages/Customers"
import Coupons from "../pages/Coupons"
import AddCustomer from "../pages/AddCustomer"
import CreateCoupons from "../pages/CreateCoupons"
import CustomerInfo from "../pages/CustomerInfo"
import TodoList from "../pages/TodoList"
import Managers from "../pages/Managers"
import Register from "../pages/Register"
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
    { path: '/customers', element: <Customers /> },
    { path: '/customers/add', element: <AddCustomer /> },
    { path: '/customers/info/:id', element: <CustomerInfo /> },
    { path: '/coupons', element: <Coupons /> },
    { path: '/coupons/create', element: <CreateCoupons /> },
    { path: '/todolist', element: <TodoList /> },
    { path: '/managers', element: <Managers /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/*', element: <NotFound /> },
]

export default routes