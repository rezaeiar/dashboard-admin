const useToken = () => {
    return document.cookie.split('=')[1]
}

export { useToken }