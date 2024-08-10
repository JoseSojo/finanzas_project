
export const KEY_STORAGE = {
    user: `current_user`,
    token: `current_token`,
    key: `value`,
}

export const PATH_URL = `https://finanzas-project.onrender.com/api/v1`;

export type ENDPOINTS =
    | "/auth/login"
    | "/auth/register"
    | "/money"
    | "/payment"
    | "/themes"
    | "/transaction"
    | "/user"

export interface CREATE {}
export interface UPDATE {
    id: string
}
export interface DELETE {
    id: string
}
export interface FIND {
    id: string
}
export interface FIND_ALL {
    sky: number,
    take: number
}

export type QUERY =
    | {name:`create`,value:CREATE}
    | {name:`update`,value:UPDATE}
    | {name:`delete`,value:DELETE}
    | {name:`find`,value:FIND}
    | {name:`findAll`,value:FIND_ALL}

