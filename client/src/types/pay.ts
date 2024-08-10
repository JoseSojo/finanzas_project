import { MoneyData } from "./money";
import { UserData } from "./user";

export interface PaymentCreate {
    name:           string;
    description:    string;
    moneyId:                string;
}

export interface PaymentUpdate {
    mountTransfer: number
}

export interface PaymentData extends PaymentCreate {
    id:                     string;
    mount:                  number;
    updateAt:               Date;
    createAt:               Date;

    moneyReference:         MoneyData;

    propietaryId:           string;
    propietaryReference:    UserData;
}
