import { useNavigate, useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"
import i18n from '../i18n'
import { useEffect } from "react"
import SuccessModal from "./components/SuccessModal"
import { useSelector } from "react-redux"

const App = () => {
    const pageLanguage = localStorage.getItem("lang");
    if (pageLanguage) {
        switch (pageLanguage) {
            case "fa": {
                document.body.dir = "rtl";
                i18n.changeLanguage("fa")
                break
            }
            case "en": {
                document.body.dir = "ltr";
                i18n.changeLanguage("en")
                break
            }
            default: {
                document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr'
                localStorage.setItem("lang", i18n.language)
                i18n.changeLanguage(i18n.language)
            }
        }
    } else {
        document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr'
        localStorage.setItem("lang", i18n.language)
    }

    const router = useRoutes(routes)

    if (router?.props.match.pathname === '/login'
        || router?.props.match.pathname === '/register'
        || router?.props.match.route.path === '/*') {
        return (
            <>
                {router}
            </>
        )
    }

    const navigate = useNavigate()
    useEffect(() => {
        if (!document.cookie.split('=')[1]) {
            navigate("/login")
        }
    }, [])

    type successModalInfoProps = {
        success: {
            value: {
                vissablity: boolean
            }
        }
    }
    const successModalInfo = useSelector((state: successModalInfoProps) => state.success)
    console.log(successModalInfo);
    
    return (
        <div className="app relative">
            <TopBar />
            <div className="flex">
                <SideBar />
                {router}
            </div>
            <SuccessModal isShowSuccessModal={successModalInfo.value.vissablity} />
        </div>
    )
}

export default App