import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import { useSelector } from "react-redux"
import { successModalType } from './types/SuccessModal.types'
import { errorModalType } from './types/ErrorModal.types'
import { AddCategoryModalType } from './types/AddCategoryModal.types'
import { confirmModalType } from "./types/ConfirmModal.types"
import { AddOrderModalType } from "./types/AddOrderModal.types"
import { AddTaskModalType } from "./types/AddTaskModal.types"
import SuccessModal from "./components/SuccessModal"
import ErrorModal from './components/ErrorModal'
import AddCategoryModal from './components/AddCategoryModal'
import ConfirmModal from "./components/ConfirmModal"
import AddOrderModal from "./components/AddOrderModal"
import AddTaskModal from "./components/AddTaskModal"

const App = () => {
    const router = useRoutes(routes);
    const successModalInfo = useSelector((state: successModalType) => state.successModal);
    const errorModalInfo = useSelector((state: errorModalType) => state.errorModal);
    const addCategoryModalInfo = useSelector((state: AddCategoryModalType) => state.addCategoryModal);
    const confirmModalInfo = useSelector((state: confirmModalType) => state.confirmModal);
    const addOrderModalInfo = useSelector((state: AddOrderModalType) => state.addOrderModal);
    const addTaskModalInfo = useSelector((state: AddTaskModalType) => state.addTaskModal);
    
    return (
        <div className="app">
            {router}
            <SuccessModal isShowSuccessModal={successModalInfo.value.visibility} payload={successModalInfo.value.payload} />
            <ErrorModal isShowErrorModal={errorModalInfo.value.visibility} payload={errorModalInfo.value.payload} />
            <AddCategoryModal isShowCategoriesModal={addCategoryModalInfo.value.visibility} />
            <ConfirmModal isShowConfirmModal={confirmModalInfo.value.visibility} payload={confirmModalInfo.value.payload} button={confirmModalInfo.value.button as "Delete" | "Continue"} handler={confirmModalInfo.value.handler} />
            <AddOrderModal isShowOrderModal={addOrderModalInfo.value.visibility} />
            <AddTaskModal isShowAddTaskModal={addTaskModalInfo.value.visibility} />
        </div>
    )
}

export default App