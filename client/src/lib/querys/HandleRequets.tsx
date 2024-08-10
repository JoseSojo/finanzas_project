import { ENDPOINTS, PATH_URL, QUERY } from "../../constant";
import { getToken } from "../storage/token.storage"

export const GenerateUrl = ({module,requets}: {module: ENDPOINTS, requets: QUERY}): string => {
    const BASIC_URL = `${PATH_URL}${module}`; // path: localhost // module: /auth

    if(requets.name === "create") return BASIC_URL;
    else if (requets.name === "update") return `${BASIC_URL}/${requets.value.id}`;
    else if (requets.name === "delete") return `${BASIC_URL}/${requets.value.id}`;
    else if (requets.name === "find") return `${BASIC_URL}/${requets.value.id}`;
    return `${BASIC_URL}?skyp=${requets.value.sky}&take=${requets.value.take}`;  

}

export const GenerateUrlStandard = ({module,ext}:{module: ENDPOINTS,ext:string}): string => {
    return `${PATH_URL}${module}/${ext}`; // path: localhost // module: /auth
}

export const GenerateRequetsOptions = (method: `GET` | `POST` | `PUT` | `DELETE`, body: any) => {

    if(method === "GET") {
        return {
            method,
            headers: {
                "Content-Type": "application/json",
                token: getToken()
            }
        }
    }

    return {
        method,
        headers: {
            "Content-Type": "application/json",
            token: getToken()
        },
        body: JSON.stringify(body)
    }
}
