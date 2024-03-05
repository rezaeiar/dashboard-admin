import { useTranslation } from "react-i18next"
import Button from "./Button"

type EmptyEntity = {
    title: string,
    type: string,
    button: string,
    link?: string,
    onSubmit?: () => void,
    children: JSX.Element
}

const EmptyEntity = ({ title, type, button, link, onSubmit, children }: EmptyEntity) => {

    const { t } = useTranslation()

    return (
        <div className='bg-white h-full rounded shadow-box flex flex-col items-center justify-center gap-y-3 md:gap-y-5 px-4 sm:px-6 md:px-8'>
            <img src={`/icons/${type}.svg`} className="w-20 sm:w-auto" alt="" />
            <h3 className="ltr:font-nunitosans-bold rtl:font-iransans-bold text-base lg:text-lg text-general-100">
                {title}
            </h3>
            <span className="text-general-80 ltr:font-nunitosans-regular rtl:font-iransans-regular text-center text-xs lg:text-base md:text-base">
                {
                    children
                }
            </span>
            {
                link ?
                    <Button type="primary" size="small" link={link}>
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {t(button)}
                        </>
                    </Button> :
                    <Button type="primary" size="small" onSubmit={onSubmit}>
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {t(button)}
                        </>
                    </Button>
            }
        </div>
    )
}

export default EmptyEntity