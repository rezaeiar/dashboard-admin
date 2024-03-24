import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useQuery } from "react-query"
import { getAllTasks, getUserTasks, deleteSingleTask } from "../../api/services/task"
import { changeTaskComplated } from "../../api/services/task"
import { showConfirmModal } from "../store/slices/ConfirmModalSlice"
import { showAddTaskModal } from "../store/slices/AddTaskModalSlice"
import Button from "../components/Button"

const TodoList = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { data: allTasksData, refetch: allTaskRefetch } = useQuery("tasks", getAllTasks)
    const { data: userTasksData, refetch: uerTasksRefetch } = useQuery("user-tasks", getUserTasks)

    const changeTaskComplatedHandler = (id: string, isComplated: boolean) => {

        changeTaskComplated(id, !isComplated)
            .then(res => {
                if (res.status === 200) {
                    uerTasksRefetch()
                    allTaskRefetch()
                }
            })
    }

    const deleteTaskGandler = (id: string) => {

        deleteSingleTask(id)
            .then(res => {
                if (res.status === 200) {
                    dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                    uerTasksRefetch()
                    allTaskRefetch()
                }
            })
    }

    const showDeleteConfirmModal = (id: string) => {
        dispatch(showConfirmModal({ visibility: true, payload: { title: t("Delete Task"), description: t("You are deleting a Task. are you sure?") }, button: "Delete", handler: () => deleteTaskGandler(id as string) }))
    }

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        {t("To-Do List")}
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="primary" size="small" onSubmit={() => dispatch(showAddTaskModal({ visibility: true }))}>
                        <>
                            {t("Add New Task")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-3">
                    <h4 className="ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold">
                        {t("Your Tasks")}
                    </h4>
                    <div className="flex flex-col gap-y-2">
                        {
                            !!userTasksData && userTasksData.map((task: any) => (
                                <div key={task.id} className={`transition-all flex justify-between py-5 rounded-lg border border-general-50 px-6 ${task.isComplated ? "bg-general-40" : "bg-white/80"}`}>
                                    <div className="flex gap-x-2 items-center">
                                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="link">
                                            <input type="checkbox" onChange={() => changeTaskComplatedHandler(task.id, task.isComplated)} checked={task.isComplated}
                                                className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-general-50 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 checked:border-primary-100 checked:bg-primary-100"
                                                id="link" />
                                            <span
                                                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
                                                    stroke="currentColor" strokeWidth="1">
                                                    <path fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                        <h3 className="ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold text-general-100 text-sm">
                                            {task.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-x-2 items-center">
                                        <div className={`p-2 w-12 rounded cursor-pointer border border-general-40 hover:border-red-101 flex items-center justify-center group hover:bg-red-101 transition-all ${task.isComplated ? "bg-general-50 border-general-50" : "bg-general-30"}`} onClick={() => showDeleteConfirmModal(task.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 group-hover:text-white group-hover:scale-125 transition-transform">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            userTasksData && !userTasksData.length &&
                            <div className="px-3 sm:px-6 py-6 sm:py-10 bg-red-90 rounded flex flex-col gap-y-4">
                                <h3 className="text-white ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold text-base sm:text-lg">
                                    {t("There are no Task for you")}
                                </h3>
                                <span className="text-white ltr:font-nunitosans-regular rtl:font-iransans-regular text-xs sm:text-sm">
                                    {t("There are no tasks assigned to you at this moment or the assigned task has expired, enjoy!")}
                                </span>
                            </div>
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h4 className="ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold">
                        {t("All Tasks")}
                    </h4>
                    <div className="flex flex-col gap-y-2">
                        {
                            !!allTasksData && allTasksData.map((task: any) => (
                                <div key={task.id} className={`transition-all flex justify-between py-5 rounded-lg border border-general-50 px-6 ${task.isComplated ? "bg-general-40" : "bg-white/80"}`}>
                                    <div className="flex gap-x-2 items-center">
                                        <label className="relative flex items-center p-3 rounded-full cursor-default">
                                            <input type="checkbox" disabled checked={task.isComplated}
                                                className="before:content[''] peer relative h-6 w-6 appearance-none rounded-md border border-general-50 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 checked:border-primary-100 checked:bg-primary-100 cursor-no-drop"
                                                id="link" />
                                            <span
                                                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
                                                    stroke="currentColor" strokeWidth="1">
                                                    <path fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                        <h3 className="ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold text-general-100 text-sm">
                                            {task.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-x-2 items-center">
                                        <div className={`p-2 w-12 rounded cursor-pointer border border-general-40 hover:border-red-101 flex items-center justify-center group hover:bg-red-101 transition-all ${task.isComplated ? "bg-general-50 border-general-50" : "bg-general-30"}`} onClick={() => showDeleteConfirmModal(task.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 group-hover:text-white group-hover:scale-125 transition-transform">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            allTasksData && !allTasksData.length &&
                            <div className="px-3 sm:px-6 py-6 sm:py-10 bg-red-90 rounded flex flex-col gap-y-4">
                                <h3 className="text-white ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold text-base sm:text-lg">
                                    {t("There are no Task for Managers.")}
                                </h3>
                                <span className="text-white ltr:font-nunitosans-regular rtl:font-iransans-regular text-xs sm:text-sm">
                                    {t("There are currently no tasks assigned to administrators or the assigned task has expired.")}
                                </span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList