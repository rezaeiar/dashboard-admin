import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"

const App = () => {
    const router = useRoutes(routes)
    return (
        <div className="app">
            <TopBar />
            <div className="flex">
                <SideBar />
                {router}
            </div>
        </div>
    )
}

export default App