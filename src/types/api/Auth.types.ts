export type RegisterInputs = {
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string
}

export type LoginInputs = {
    usernameOrEmail: string
    password: string
}