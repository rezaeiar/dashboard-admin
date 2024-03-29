import { Dispatch, SetStateAction } from "react";
type CheckBoxProps = {
    isChecked: boolean,
    setIsChecked: Dispatch<SetStateAction<boolean>>
    forId: string
}
const CheckBox = ({ isChecked, setIsChecked, forId }: CheckBoxProps) => {
    console.log();

    return (
        <div className="relative">
            <input onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} className="peer hidden" type="checkbox" id={forId} />
            <label className="duration-300 shadow-lg cursor-pointer h-4 w-8 xl:w-12 xl:h-6 bg-primary-60 rounded-full flex after:size-3 xl:after:size-5 after:bg-white after:rounded-full items-center after:absolute after:left-0.5 peer-checked:after:left-[18px] xl:peer-checked:after:left-[26px] rtl:after:right-0.5 rtl:peer-checked:after:right-[18px] xl:rtl:peer-checked:after:right-[26px] after:duration-300 peer-checked:bg-primary-100" htmlFor={forId}></label>
        </div>
    )
}

export default CheckBox