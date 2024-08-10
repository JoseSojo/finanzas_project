import { MoneyData } from "./money";
import { PaymentData } from "./pay";
import { ThemeData } from "./theme";
import { TransactionData } from "./transaction";
import { UserData } from "./user";

// error
export interface ResponseError {
    error?: boolean,
    errorMessage?: string,
}

// user
export interface ResponseLogin {
    body: {userReference: UserData},
    token: string
}

export interface ResponseRegister {
    body: UserData,
    token: string
}

// money 
export interface ResponseCreateMoney {
    body: MoneyData
}
export interface ResponseUpdateMoney {
    body: MoneyData
}
export interface ResponseGetAllMoney {
    body: MoneyData[]
}
export interface ResponseGetOneMoney {
    body: MoneyData
}

// pay
export interface ResponseCreatePay {
    body: PaymentData
}
export interface ResponseUpdatePay {
    body: PaymentData
}
export interface ResponseGetAllPay {
    body: PaymentData[]
}
export interface ResponseGetOnePay {
    body: PaymentData
}

// theme
export interface ResponseCreateTheme {
    body: ThemeData
}
export interface ResponseUpdateTheme {
    body: ThemeData
}
export interface ResponseGetAllTheme {
    body: ThemeData[]
}
export interface ResponseGetOneTheme {
    body: ThemeData
}

export interface CountForDashboard {
    sessions:       number;
    money:          number;
    pay:            number;
    theme:          number;
    transactions:   number;
}

export interface ResponseGetCount {
    body: {
        _count:    CountForDashboard
    }
}

// theme
export interface ResponseCreateTransaction {
    body: TransactionData
}
export interface ResponseGetAllTransaction {
    body: TransactionData[]
}
