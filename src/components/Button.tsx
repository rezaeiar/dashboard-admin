import { Link } from "react-router-dom";

type ButtonType = "primary" | "secondary" | "destructive" | "destructive-secondary" | 'white';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
    type: ButtonType,
    size: ButtonSize,
    styles: string,
    children: JSX.Element,
    link?: string,
    onSubmit?: () => void
}
const Button = (props: ButtonProps) => {
    switch (props.type) {
        case "primary": {
            return (
                <button onClick={props.onSubmit && props.onSubmit}>
                    <Link to={props.link ? props.link : "#"} className={`primary ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        case "secondary": {
            return (
                <button onClick={props.onSubmit && props.onSubmit}>
                    <Link to={props.link ? props.link : "#"} className={`secondary ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        case "destructive": {
            return (
                <button onClick={props.onSubmit && props.onSubmit}>
                    <Link to={props.link ? props.link : "#"} className={`destructive ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        case "destructive-secondary": {
            return (
                <button onClick={props.onSubmit && props.onSubmit}>
                    <Link to={props.link ? props.link : "#"} className={`destructive-secondary ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        case "white": {
            return (
                <button onClick={props.onSubmit && props.onSubmit}>
                    <Link to={props.link ? props.link : "#"} className={`white ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        default: {
            return (
                <button onClick={props.onSubmit && props.onSubmit}>
                    <Link to={props.link ? props.link : "#"} className={`primary ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
    }
}

export default Button