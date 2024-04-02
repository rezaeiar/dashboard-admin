export type ButtonType = "primary" | "secondary" | "destructive" | "destructive-secondary" | 'white'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = {
    type: ButtonType,
    size: ButtonSize,
    styles?: string,
    link?: string,
    onSubmit?: () => void,
    submit? : boolean,
    disabled?: boolean,
    children: JSX.Element,
}