type TooltipProps = {
    message: string,
    styles: string
}
const Tooltip = ({ message }: TooltipProps) => {
    return (
        <div className="fixed z-50 -translate-x-16 -translate-y-10 h-10 w-52 shadow-box rounded-sm bg-white flex items-center justify-center text-general-100 font-nunitosans-regular text-sm">
            <div className="w-0 h-0 border-l-transparent border-l-[6px] border-r-transparent border-r-[6px] border-b-white border-b-[6px] absolute -top-1.5"></div>
            {message}
        </div>
    )
}

export default Tooltip