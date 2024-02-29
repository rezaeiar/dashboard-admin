import { Dispatch, SetStateAction } from "react"
import { deleteSingleCategory } from "../../api/services/category"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

type DeleteModalProps = {
    isShowDeleteModal: boolean,
    setIsShowDeleteModal: Dispatch<SetStateAction<boolean>>,
    categoryId: string
}
const DeleteModal = ({ isShowDeleteModal, setIsShowDeleteModal, categoryId }: DeleteModalProps) => {

    const navigate = useNavigate()
    const deleteCategoryHandler = () => {
        deleteSingleCategory(categoryId)
            .then(res => {
                if (res.status === 200) {
                    navigate("/categories")
                }
            })

    }
    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) {
            setIsShowDeleteModal(false)
        }
    }
    return (
        <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 ${isShowDeleteModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)}>
            <div className="flex flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex justify-between items-center">
                    <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                        Delete Items
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 cursor-pointer" onClick={() => setIsShowDeleteModal(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm text-general-80'>
                    Are you sure you want to delete 4 selected items?
                </span>
                <div className="flex gap-x-6 items-center justify-end">
                    <a className="text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => setIsShowDeleteModal(false)}>
                        Cancel
                    </a>
                    <Button size="small" type="destructive" styles="" onSubmit={() => deleteCategoryHandler()}>
                        <>
                            Delete
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal