import { KEY_STORAGE } from "../../constant";
import { UserData } from "../../types/user";

const setUser = (user: UserData) => {
    window.localStorage.setItem(KEY_STORAGE.user, JSON.stringify(user))
}

const getUser = () : UserData|null => {
    const user = window.localStorage.getItem(KEY_STORAGE.user);
    if(user) return JSON.parse(user) as UserData;

    return null;
}

const removeUser = () => {
    window.localStorage.removeItem(KEY_STORAGE.user);
}

export {setUser,getUser,removeUser};
