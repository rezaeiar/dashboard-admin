import LanguageSelector from '../utils/LanguageSelector'
import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import { useSelector } from "react-redux"
import { successModalType } from './types/SuccessModal.types'
import SuccessModal from "./components/SuccessModal"

const App = () => {
    LanguageSelector();
    const router = useRoutes(routes);
    const successModalInfo = useSelector((state: successModalType) => state.successModal);    
    
    return (
        <div className="app">
            {router}
            <SuccessModal isShowSuccessModal={successModalInfo.value.vissablity} payload={successModalInfo.value.payload} />
        </div>
    )
}

export default App