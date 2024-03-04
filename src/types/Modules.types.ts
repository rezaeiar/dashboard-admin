export type ButtonType = "primary" | "secondary" | "destructive" | "destructive-secondary" | 'white'

type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = {
    type: ButtonType,
    size: ButtonSize,
    styles?: string,
    link?: string,
    onSubmit?: () => void,
    submit? : boolean
    children: JSX.Element,
}