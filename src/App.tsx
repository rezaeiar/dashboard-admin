import { useEffect } from "react"
import { useNavigate, useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import SuccessModal from "./components/SuccessModal"
import { useSelector } from "react-redux"
import LanguageSelector from '../utils/LanguageSelector'
import { useToken } from "./hooks/useToken"

const App = () => {
    const token = useToken()
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])

    LanguageSelector()
    const router = useRoutes(routes)
    const successModalInfo = useSelector((state: successModalInfoProps) => state.success)

    type successModalInfoProps = {
        success: {
            value: {
                vissablity: boolean
            }
        }
    }

    return (
        <div className="app">
            {router}
            <SuccessModal isShowSuccessModal={successModalInfo.value.vissablity} />
        </div>
    )
}

export default App