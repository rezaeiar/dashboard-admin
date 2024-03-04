import { ButtonProps, ButtonType } from "../types/Modules.types";
import { Link } from "react-router-dom";

const Button = ({ type, size, styles, link, onSubmit, children }: ButtonProps) => {

    const generateInnerClasses = (type: ButtonType) => {
        let innerClasses = null;

        switch (type) {
            case "primary": {
                innerClasses = `${type} ${size} ${styles}`
                break
            }
            case "secondary": {
                innerClasses = `${type} ${size} ${styles}`
                break
            }
            case "destructive": {
                innerClasses = `${type} ${size} ${styles}`
                break
            }
            case "destructive-secondary": {
                innerClasses = `${type} ${size} ${styles}`
                break
            }
            case "white": {
                innerClasses = `${type} ${size} ${styles}`
                break
            }
            default: {
                innerClasses = `primary ${size} ${styles}`
            }
        }
        return innerClasses
    }

    if (link) {
        return (
            <Link to={link} className={generateInnerClasses(type)}>
                {children}
            </Link>
        )
    }
    return (
        <button onClick={onSubmit} className={generateInnerClasses(type)}>
            {
                children
            }
        </button>
    )
}

export default Button