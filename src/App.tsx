import { useRoutes } from "react-router-dom"
import routes from "./routes/routes"
import { useSelector } from "react-redux"
import { SuccessModalType, ErrorModalType, AddCategoryModalType, ConfirmModalType, AddOrderModalType, AddTaskModalType, ChangePasswordModalType, ChangeOrderStatusModalType } from "./types/store/Store.types"
import SuccessModal from "./components/SuccessModal"
import ErrorModal from './components/ErrorModal'
import AddCategoryModal from './components/AddCategoryModal'
import ConfirmModal from "./components/ConfirmModal"
import AddOrderModal from "./components/AddOrderModal"
import AddTaskModal from "./components/AddTaskModal"
import ChangePasswordModal from "./components/ChangePasswordModal"
import ChangeOrderStatusModal from "./components/ChangeOrderStatusModal"

const App = () => {
    const router = useRoutes(routes);
    const successModalInfo = useSelector((state: SuccessModalType) => state.successModal);
    const errorModalInfo = useSelector((state: ErrorModalType) => state.errorModal);
    const addCategoryModalInfo = useSelector((state: AddCategoryModalType) => state.addCategoryModal);
    const confirmModalInfo = useSelector((state: ConfirmModalType) => state.confirmModal);
    const addOrderModalInfo = useSelector((state: AddOrderModalType) => state.addOrderModal);
    const addTaskModalInfo = useSelector((state: AddTaskModalType) => state.addTaskModal);
    const changePasswordModalInfo = useSelector((state: ChangePasswordModalType) => state.changePasswordModal);
    const changeOrderStatusModalInfo = useSelector((state: ChangeOrderStatusModalType) => state.changeOrderStatusModal);

    return (
        <div className="app">
            {router}
            <SuccessModal isShowSuccessModal={successModalInfo.value.visibility} payload={successModalInfo.value.payload} />
            <ErrorModal isShowErrorModal={errorModalInfo.value.visibility} payload={errorModalInfo.value.payload} />
            <AddCategoryModal isShowCategoriesModal={addCategoryModalInfo.value.visibility} />
            <ConfirmModal isShowConfirmModal={confirmModalInfo.value.visibility} payload={confirmModalInfo.value.payload} button={confirmModalInfo.value.button as "Delete" | "Continue"} handler={confirmModalInfo.value.handler} />
            <AddOrderModal isShowOrderModal={addOrderModalInfo.value.visibility} />
            <AddTaskModal isShowAddTaskModal={addTaskModalInfo.value.visibility} />
            <ChangePasswordModal isShowChangePasswordModal={changePasswordModalInfo.value.visibility} />
            <ChangeOrderStatusModal isShowChangeOrderStatusModal={changeOrderStatusModalInfo.value.visibility} orderId={changeOrderStatusModalInfo.value.orderId} />

        </div>
    )
}

export default App