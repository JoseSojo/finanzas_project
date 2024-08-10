import { KEY_STORAGE } from "../../constant";

const setToken = (token: string) => {
    window.localStorage.setItem(KEY_STORAGE.token, token)
}

const getToken = () : string => {
    const token = window.localStorage.getItem(KEY_STORAGE.token);
    if(token) return token;

    return ``;
}

const removeToken = () => {
    window.localStorage.removeItem(KEY_STORAGE.token);
}

export {setToken,getToken,removeToken};
