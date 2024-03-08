export type confirmModalType = {
    confirmModal: {
        value: {
            vissablity: boolean,
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