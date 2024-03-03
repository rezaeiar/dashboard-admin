type Route = {
    path: string,
    element: JSX.Element,
}
type RouteChildren = {
    children?: Route[]
}

export type RouteType = Route & RouteChildren