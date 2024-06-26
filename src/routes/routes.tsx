import { RouteType } from "../types/routes/Routes.types"
import Site from "../pages/Site"
import Panel from "../pages/Panel"
import Dashboard from "../pages/Dashboard"
import Orders from "../pages/Orders"
import Products from "../pages/Products"
import AddProduct from "../pages/AddProduct"
import EditProduct from "../pages/EditProduct"
import Categories from "../pages/Categories"
import SingleCategory from "../pages/SingleCategory"
import Customers from "../pages/Customers"
import AddCustomer from "../pages/AddCustomer"
import CustomerInfo from "../pages/CustomerInfo"
import EditCustomer from "../pages/EditCustomer"
import Coupons from "../pages/Coupons"
import CreateCoupons from "../pages/CreateCoupons"
import Inbox from "../pages/Inbox"
import Managers from "../pages/Managers"
import TodoList from "../pages/TodoList"
import Setting from "../pages/Setting"
import Register from "../pages/Register"
import Login from "../pages/Login"
import NotFound from "../pages/404"

const routes: RouteType[] = [
    { path: '/', element: <Site /> },
    {
        path: "/panel", element: <Panel />, children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'orders', element: <Orders /> },
            { path: 'products', element: <Products /> },
            { path: 'products/add', element: <AddProduct /> },
            { path: 'products/edit/:id', element: <EditProduct /> },
            { path: 'categories', element: <Categories /> },
            { path: 'categories/:id', element: <SingleCategory /> },
            { path: 'customers', element: <Customers /> },
            { path: 'customers/add', element: <AddCustomer /> },
            { path: 'customers/info/:id', element: <CustomerInfo /> },
            { path: 'customers/edit/:id', element: <EditCustomer /> },
            { path: 'coupons', element: <Coupons /> },
            { path: 'coupons/create', element: <CreateCoupons /> },
            { path: 'inbox', element: <Inbox /> },
            { path: 'managers', element: <Managers /> },
            { path: 'todolist', element: <TodoList /> },
            { path: 'setting/', element: <Setting /> },
            { path: 'setting/:page', element: <Setting /> },
        ]
    },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/*', element: <NotFound /> },
]

export default routes