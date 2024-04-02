import i18n from '../../i18n'
import { useTranslation } from 'react-i18next';

const pageLanguage = localStorage.getItem("lang");

const LanguageSelector = () => {
    if (pageLanguage) {
        switch (pageLanguage) {
            case "fa": {
                document.body.dir = "rtl";
                i18n.changeLanguage("fa")
                break
            }
            case "en": {
                document.body.dir = "ltr";
                i18n.changeLanguage("en")
                break
            }
            default: {
                document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr'
                localStorage.setItem("lang", i18n.language)
                i18n.changeLanguage(i18n.language)
            }
        }
    } else {
        document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr'
        localStorage.setItem("lang", i18n.language)
    }
}

const changeLanguage = () => {
    const { i18n: i18next } = useTranslation()
    return (lang: string) => {
        i18next.changeLanguage(lang)
        document.body.dir = lang === 'fa' ? 'rtl' : 'ltr'
        localStorage.setItem("lang", lang)
    }
}

export default LanguageSelector
export { changeLanguage }