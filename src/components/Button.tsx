type ButtonType = "primary" | "secondary" | "destructive" | "destructive-secondary" | 'white';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
    type: ButtonType,
    size: ButtonSize,
    styles: string,
    children: JSX.Element
}
const Button = (props: ButtonProps) => {
    switch (props.type) {
        case "primary": {
            return (
                <button className={`primary ${props.size} ${props.styles}`}>
                    {
                        props.children
                    }
                </button>
            )
        }
        case "secondary": {
            return (
                <button className={`secondary ${props.size} ${props.styles}`}>
                    {
                        props.children
                    }
                </button>
            )
        }
        case "destructive": {
            return (
                <button className={`destructive ${props.size} ${props.styles}`}>
                    {
                        props.children
                    }
                </button>
            )
        }
        case "destructive-secondary": {
            return (
                <button className={`destructive-secondary ${props.size} ${props.styles}`}>
                    {
                        props.children
                    }
                </button>
            )
        }
        case "white": {
            return (
                <button className={`white ${props.size} ${props.styles}`}>
                    {
                        props.children
                    }
                </button>
            )
        }
        default: {
            return (
                <button className={`primary ${props.size} ${props.styles}`}>
                    {
                        props.children
                    }
                </button>
            )
        }
    }
}

export default Button