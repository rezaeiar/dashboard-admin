import { useToken } from "../hooks/useToken"
import { useOutlet, useNavigate, Outlet } from "react-router-dom"
import { useEffect } from "react"
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
const Panel = () => {
    const token = useToken()
    const outlet = useOutlet()
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            if (!outlet) navigate("dashboard")
        } else {
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