export type confirmModalType = {
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