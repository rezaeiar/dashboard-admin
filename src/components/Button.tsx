import { Link } from "react-router-dom";

type ButtonType = "primary" | "secondary" | "destructive" | "destructive-secondary" | 'white';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
    type: ButtonType,
    size: ButtonSize,
    styles: string,
    children: JSX.Element,
    link?: string
}
const Button = (props: ButtonProps) => {
    switch (props.type) {
        case "primary": {
            return (
                <button>
                    <Link to={props.link ? props.link : ""} className={`primary ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        case "secondary": {
            return (
                <button>
                    <Link to={props.link ? props.link : ""} className={`secondary ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        case "destructive": {
            return (
                <button>
                    <Link to={props.link ? props.link : ""} className={`destructive ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        case "destructive-secondary": {
            return (
                <button>
                    <Link to={props.link ? props.link : ""} className={`destructive-secondary ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        case "white": {
            return (
                <button>
                    <Link to={props.link ? props.link : ""} className={`white ${props.size} ${props.styles}`}>
                        {
                            props.children
                        }
                    </Link>
                </button>
            )
        }
        default: {
            return (
                <button>
                    <Link to={props.link ? props.link : ""} className={`primary ${props.size} ${props.styles}`}>
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