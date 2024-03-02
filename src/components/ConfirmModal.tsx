import { Dispatch, SetStateAction } from "react"
import { changeCategoryInfo } from "../../api/services/category"
import Button from "./Button"
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query"
import { useDispatch } from "react-redux"
import { changeState } from "../store/slices/successSlice"

type ConfirmModalProps = {
    isShowConfirmModal: boolean,
    setIsShowConfirmModal: Dispatch<SetStateAction<boolean>>,
    categoryId: string,
    categoryName: string,
    refetch : <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}
const ConfirmModal = ({ isShowConfirmModal, setIsShowConfirmModal, categoryId, categoryName, refetch }: ConfirmModalProps) => {
    const dispatch = useDispatch()


    const changeCategoryInfoHandler = () => {
        changeCategoryInfo(categoryId, categoryName)
            .then(res => {
                if (res.status === 200) {
                    setIsShowConfirmModal(false)
                    dispatch(changeState({ vissablity: true, }))
                    refetch()
                }
            })

    }
    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) {
            setIsShowConfirmModal(false)
        }
    }
    return (
        <>
            <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 px-4 sm:px-6 md:px-8 ${isShowConfirmModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)}>
                <div className="flex flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                    <div className="flex justify-between items-center">
                        <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                            Change information
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 cursor-pointer" onClick={() => setIsShowConfirmModal(false)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm text-general-80'>
                        Are you sure you want to change the information of this category?
                    </span>
                    <div className="flex gap-x-6 items-center justify-end">
                        <a className="text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => setIsShowConfirmModal(false)}>
                            Cancel
                        </a>
                        <Button size="small" type="primary" styles="" onSubmit={() => changeCategoryInfoHandler()}>
                            <>
                                Change
                            </>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmModal