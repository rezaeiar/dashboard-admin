import i18n from './../../i18n'

const pageLanguage = localStorage.getItem("lang");

function LanguageSelector() {
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
export default LanguageSelector