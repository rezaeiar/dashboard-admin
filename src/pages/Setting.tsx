import { useParams } from "react-router-dom"
import ProfileSetting from "./ProfileSetting"
import NotificationSetting from "./NotificationsSetting"

const Setting = () => {

    const params = useParams()
    
    console.log("Fdsa");
    
    switch (params.page) {
        case "profile": {
            return <ProfileSetting />
        }
        case "notifications": {
            return <NotificationSetting />
        }
        default : {
            return <ProfileSetting />
        }
    }
}

export default Setting