import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"
import Overlay from "./components/Overlay"
import i18n from '../i18n'
import { useEffect } from "react"

const App = () => {
    useEffect(() => {
        document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr'
    }, [])
    
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
                {/* <SideBar /> */}
                {/* {router} */}
            </div>
            {/* <Overlay /> */}
        </div>
    )
}

export default App