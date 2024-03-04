import Cookies from 'universal-cookie';

const useToken = () => {
    const cookies = new Cookies();
    return cookies.get("token")
}

export { useToken }