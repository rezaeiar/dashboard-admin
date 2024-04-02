import Cookies from 'universal-cookie';

const cookies = new Cookies()
const TOKEN_STORAGE_TIME_IN_STORAGE = 86400000 // 24 Hour

const useGetTokenFromCookies = () => {
    return cookies.get("token")
}

const useSaveTokenInCookies = (token: string) => {
    cookies.set('token', token, { path: '/', expires: new Date(Date.now() + TOKEN_STORAGE_TIME_IN_STORAGE) });
}

const useRemoveTokenFromCookies = () => {
    cookies.remove("token", { path: '/', expires: new Date(Date.now() + TOKEN_STORAGE_TIME_IN_STORAGE) })
}

export { useGetTokenFromCookies, useSaveTokenInCookies, useRemoveTokenFromCookies }