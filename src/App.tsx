import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import { useSelector } from "react-redux"
import { successModalType } from './types/SuccessModal.types'
import { errorModalType } from './types/ErrorModal.types'
import { AddCategoryModalType } from './types/AddCategoryModal.types'
import { confirmModalType } from "./types/ConfirmModal.types"
import { AddOrderModalType } from "./types/AddOrderModal.types"
import SuccessModal from "./components/SuccessModal"
import ErrorModal from './components/ErrorModal'
import AddCategoryModal from './components/AddCategoryModal'
import ConfirmModal from "./components/ConfirmModal"
import AddOrderModal from "./components/AddOrderModal"

const App = () => {
    const router = useRoutes(routes);
    const successModalInfo = useSelector((state: successModalType) => state.successModal);
    const errorModalInfo = useSelector((state: errorModalType) => state.errorModal);
    const addCategoryModalInfo = useSelector((state: AddCategoryModalType) => state.addCategoryModal);
    const confirmModalInfo = useSelector((state: confirmModalType) => state.confirmModal);
    const addOrderModalInfo = useSelector((state: AddOrderModalType) => state.addOrderModal);

    console.log(addOrderModalInfo);
    
    return (
        <div className="app">
            {router}
            <SuccessModal isShowSuccessModal={successModalInfo.value.vissablity} payload={successModalInfo.value.payload} />
            <ErrorModal isShowErrorModal={errorModalInfo.value.vissablity} payload={errorModalInfo.value.payload} />
            <AddCategoryModal isShowCategoriesModal={addCategoryModalInfo.value.vissablity} />
            <ConfirmModal isShowConfirmModal={confirmModalInfo.value.vissablity} payload={confirmModalInfo.value.payload} button={confirmModalInfo.value.button as "Delete" | "Continue"} handler={confirmModalInfo.value.handler} />
            <AddOrderModal isShowOrderModal={addOrderModalInfo.value.vissablity} />
        </div>
    )
}

export default App