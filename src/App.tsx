import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"

const App = () => {
    const router = useRoutes(routes)
    return (
        <div className="app">
            {router}
        </div>
    )
}

export default App