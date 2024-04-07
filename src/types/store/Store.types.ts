export type SuccessModalType = {
    successModal: {
        value: {
            visibility: boolean,
            payload: {
                title: string,
                description: string
            }
        }
    }
}

export type ErrorModalType = {
    errorModal: {
        value: {
            visibility: boolean,
            payload: {
                title: string,
                description: string
            }
        }
    }
}

export type AddCategoryModalType = {
    addCategoryModal: {
        value: {
            visibility: boolean
        }
    }
}

export type ConfirmModalType = {
    confirmModal: {
        value: {
            visibility: boolean,
            payload: {
                title: string,
                description: string
            },
            button: "Delete" | "Continue",
            redirect: string,
            handler: () => void
        }
    }
}

export type AddOrderModalType = {
    addOrderModal: {
        value: {
            visibility: boolean
        }
    }
}

export type AddTaskModalType = {
    addTaskModal: {
        value: {
            visibility: boolean
        }
    }
}

export type ChangePasswordModalType = {
    changePasswordModal: {
        value: {
            visibility: boolean
        }
    }
}

export type NotificationLengthType = {
    notificationLength: {
        value: number
    }
}

export type ChangeOrderStatusModalType = {
    changeOrderStatusModal: {
        value: {
            visibility: boolean,
            orderId: string
        }
    }
}