import { useParams } from "react-router-dom"
import ProfileSetting from "./ProfileSetting"
import NotificationSetting from "./NotificationsSetting"
import PanelSetting from "./PanelSetting"

const Setting = () => {

    const params = useParams()

    switch (params.page) {
        case "profile": {
            return <ProfileSetting />
        }
        case "notifications": {
            return <NotificationSetting />
        }
        case "general": {
            return <PanelSetting />
        }
        default: {
            return <ProfileSetting />
        }
    }
}

export default Setting