import { useMutation } from "react-query"
import { RegisterInputs } from "../../types/auth/Auth.types"
import { singUp } from "../../../api/services/auth"

const useRegister = () => {
    return useMutation({
        mutationFn: async (data: RegisterInputs) => {
            return singUp(data)
        }
    })
}

export { useRegister }