import { useToken } from "../hooks/useToken"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Site = () => {
    const token = useToken()
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])

    return (
        <div className="flex items-center justify-center font-nunitosans-bold text-4xl h-screen">
            This IS My Site !!!
        </div>
    )
}

export default Site