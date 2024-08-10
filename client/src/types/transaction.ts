import { PaymentData } from "./pay";
import { ThemeData } from "./theme";
import { UserData } from "./user";

export interface TransactionCreate {
    themeId:    string;
    payId:      string;
    userId:     string;
    mount:      number
    date:       string
}

export interface TransactionData extends TransactionCreate {
    id:                 number;
    themeReference:     ThemeData;
    payReference:       PaymentData;
    userReference:      UserData;
}
