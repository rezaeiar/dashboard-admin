import Dashboard from "../pages/Dashboard"

type RoutesType = {
    path: string,
    element: JSX.Element
}

const routes: RoutesType[] = [
    { path: '/', element: <Dashboard /> }
]

export default routes