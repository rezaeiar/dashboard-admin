import { useToken } from "../hooks/useToken"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Button from "../components/Button"
import Cookies from 'universal-cookie';
import { useQuery } from "react-query";
import { getMe } from "../../api/services/auth";

const Site = () => {

    const cookies = new Cookies()
    const token = useToken()
    const navigate = useNavigate()

    const { data, isSuccess } = useQuery("admin", () => getMe())

    useEffect(() => {
        if (isSuccess) {
            if (data) {
                if (data.roles.includes("ADMIN")) {
                    navigate("/panel/dashboard")
                }
            }
            else {
                navigate("/login")
            }
        }

    }, [isSuccess])

    const logOutHandler = () => {
        cookies.remove("token", { path: '/', expires: new Date(Date.now() + 86400000) })
        navigate("/login")
    }
    return (
        <div className="relative flex items-center justify-center font-nunitosans-bold h-screen bg-gradient-to-r from-green-30 to-green-40">
            <div className="flex flex-col md:flex-row gap-y-4 rounded-2xl h-auto md:h-72 md:w-[650px] bg-white backdrop-blur shadow-xl hover:shadow-2xl transition-all items-center justify-center p-4 md:p-0 mx-4">
                <div className="h-52 w-full md:w-52 bg-gradient-to-bl from-green-101 to-green-80 rounded-2xl md:-translate-x-20">

                </div>
                <div className="flex flex-col gap-y-3 md:-translate-x-14">
                    <span className="text-sm text-general-60 ltr:font-nunitosans-regular">
                        a problem!
                    </span>
                    <h1 className="text-xl text-general-100 ltr:font-nunitosans-bold">
                        You are not an admin!
                    </h1>
                    <p className="md:w-96 text-general-80 ltr:font-nunitosans-semiBold">
                        Your login has been approved, but your role on this site is not admin; Please log out and enter as admin.
                    </p>
                    <Button size="small" type="secondary" styles="w-max" onSubmit={logOutHandler}>
                        <>
                            Log out and go to the login page
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Site