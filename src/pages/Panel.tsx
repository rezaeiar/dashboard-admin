import { useOutlet, useNavigate, Outlet } from "react-router-dom"
import { useGetMe } from "../hooks/api/useGetMe"
import { useEffect } from "react"
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"

const Panel = () => {

    const outlet = useOutlet()
    const navigate = useNavigate()
    const { data, isSuccess } = useGetMe()

    useEffect(() => {
        if (isSuccess) {
            if (data) {
                if (data.roles.includes("ADMIN")) {
                    if (!outlet) navigate("dashboard")
                } else {
                    navigate("/")
                }
            } else {
                navigate("/logn")
            }
        }
    }, [data, outlet])

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