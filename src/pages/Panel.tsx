import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
const Panel = () => {
    return (
        <div className="relative">
            <TopBar />
            <div className="flex">
                <SideBar />
                <Outlet />
            </div>
        </div>
    )
}

export default Panel