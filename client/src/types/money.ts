import { UserData } from "./user";

export interface MoneyCreate extends MoneyUpdate {
    name: string
}

export interface MoneyUpdate {
    mount: number
}

export interface MoneyData extends MoneyCreate {
    id:                     string;
    updateAt:               Date;
    createAt:               Date;
    propietaryId:           string;
    propietaryReference:    UserData
}
