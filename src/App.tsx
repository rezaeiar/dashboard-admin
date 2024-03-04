import LanguageSelector from '../utils/LanguageSelector'
import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import { useSelector } from "react-redux"
import { successModalType } from './types/SuccessModal.types'
import { errorModalType } from './types/ErrorModal.types'
import SuccessModal from "./components/SuccessModal"
import ErrorModal from './components/ErrorModal'

const App = () => {
    LanguageSelector();
    const router = useRoutes(routes);
    const successModalInfo = useSelector((state: successModalType) => state.successModal);    
    const errorModalInfo = useSelector((state: errorModalType) => state.errorModal);    
    
    return (
        <div className="app">
            {router}
            <SuccessModal isShowSuccessModal={successModalInfo.value.vissablity} payload={successModalInfo.value.payload} />
            <ErrorModal isShowErrorModal={errorModalInfo.value.vissablity} payload={errorModalInfo.value.payload} />
        </div>
    )
}

export default App