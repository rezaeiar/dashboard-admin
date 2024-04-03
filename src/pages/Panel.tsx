import { useOutlet, useNavigate, Outlet } from "react-router-dom"
import { useEffect } from "react"
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import { useGetTokenFromCookies } from "../hooks/modules/useToken"

const Panel = () => {

    const outlet = useOutlet()
    const navigate = useNavigate()
    const token = useGetTokenFromCookies()

    useEffect(() => {
        if (token) {
            if (!outlet) navigate("dashboard")

        } else {
            navigate("/login")
        }
    }, [outlet])

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