import { useToken } from "../hooks/useToken"
import { useNavigate, Outlet } from "react-router-dom"
import { useEffect } from "react"
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
const Panel = () => {
    const token = useToken()
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])

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