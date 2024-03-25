import { useParams } from "react-router-dom"
import ProfileSetting from "./ProfileSetting"

const Setting = () => {

    const params = useParams()
    switch (params.page) {
        case "profile": {
            return <ProfileSetting />
        }
        default : {
            return <ProfileSetting />
        }
    }
}

export default Setting