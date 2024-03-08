import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import { useSelector } from "react-redux"
import { successModalType } from './types/SuccessModal.types'
import { errorModalType } from './types/ErrorModal.types'
import { AddCategoryModalType } from './types/AddCategoryModal.types'
import { confirmModalType } from "./types/ConfirmModal.types"
import SuccessModal from "./components/SuccessModal"
import ErrorModal from './components/ErrorModal'
import AddCategoryModal from './components/AddCategoryModal'
import ConfirmModal from "./components/ConfirmModal"

const App = () => {
    const router = useRoutes(routes);
    const successModalInfo = useSelector((state: successModalType) => state.successModal);
    const errorModalInfo = useSelector((state: errorModalType) => state.errorModal);
    const addCategoryModalInfo = useSelector((state: AddCategoryModalType) => state.addCategoryModal);
    const confirmModalInfo = useSelector((state: confirmModalType) => state.confirmModal);

    return (
        <div className="app">
            {router}
            <SuccessModal isShowSuccessModal={successModalInfo.value.vissablity} payload={successModalInfo.value.payload} />
            <ErrorModal isShowErrorModal={errorModalInfo.value.vissablity} payload={errorModalInfo.value.payload} />
            <AddCategoryModal isShowCategoriesModal={addCategoryModalInfo.value.vissablity} />
            <ConfirmModal isShowConfirmModal={confirmModalInfo.value.vissablity} payload={confirmModalInfo.value.payload} button={confirmModalInfo.value.button as "Delete" | "Continue"} redirect={confirmModalInfo.value.redirect} handler={confirmModalInfo.value.handler} />
        </div>
    )
}

export default App