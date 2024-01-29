import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"
import Overlay from "./components/Overlay"
import i18n from '../i18n'
import Button from "./components/Button"

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
        || router?.props.match.route.path === '/*') {
        return (
            <>
                {router}
            </>
        )
    }
    return (
        <div className={`app relative`}>
            <TopBar />
            <div className="flex relative">
                <SideBar />
                {router}
            </div>
            {/* <Overlay /> */}
        </div>
    )
}

export default App