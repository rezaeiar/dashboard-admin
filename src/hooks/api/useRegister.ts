import { useQueryClient, useMutation } from "react-query"
import { RegisterInputs } from "../../types/api/Auth.types"
import { singUp } from "../../../api/services/auth"

const useRegister = () => {

    const queryClient = useQueryClient()
    return useMutation((data: RegisterInputs) => {
        return singUp(data)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["customers"])
        }
    }
    )
}

export { useRegister }