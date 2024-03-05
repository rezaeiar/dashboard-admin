import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import { useSelector } from "react-redux"
import { successModalType } from './types/SuccessModal.types'
import { errorModalType } from './types/ErrorModal.types'
import { AddCategoryModalType } from './types/AddCategoryModal.types'
import SuccessModal from "./components/SuccessModal"
import ErrorModal from './components/ErrorModal'
import AddCategoryModal from './components/AddCategoryModal'

const App = () => {
    const router = useRoutes(routes);
    const successModalInfo = useSelector((state: successModalType) => state.successModal);
    const errorModalInfo = useSelector((state: errorModalType) => state.errorModal);
    const addCategoryModalInfo = useSelector((state: AddCategoryModalType) => state.addCategoryModal);

    return (
        <div className="app">
            {router}
            <SuccessModal isShowSuccessModal={successModalInfo.value.vissablity} payload={successModalInfo.value.payload} />
            <ErrorModal isShowErrorModal={errorModalInfo.value.vissablity} payload={errorModalInfo.value.payload} />
            <AddCategoryModal isShowCategoriesModal={addCategoryModalInfo.value.vissablity} />
        </div>
    )
}

export default App