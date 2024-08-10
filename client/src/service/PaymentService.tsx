import { GenerateRequetsOptions, GenerateUrl } from "../lib/querys/HandleRequets";
import { PaymentCreate, PaymentUpdate } from "../types/pay"
import { ResponseCreatePay, ResponseGetAllPay, ResponseGetOnePay, ResponseUpdatePay } from "../types/requets";

const PaymentCreateService = async (body: PaymentCreate) => {
    
    const url = GenerateUrl({module:"/payment",requets:{name:"create",value:{}}});
    const RequetsOptions = GenerateRequetsOptions("POST",body);

    try {
        
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseCreatePay[];
        return json;

    } catch (error) {
        console.log(error);
    }

}

const PaymentUpdateService = async (body: PaymentUpdate,id:string) => {
    
    const url = GenerateUrl({module:"/payment",requets:{name:"update",value:{id}}});
    const RequetsOptions = GenerateRequetsOptions("PUT",body);

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseUpdatePay[];
        return json;

    } catch (error) {
        console.log(error);
    }

}

const PaymentFindAllService = async ({sky,take}:{sky:number,take:number}) => {
    
    const url = GenerateUrl({module:"/payment",requets:{name:"findAll",value:{sky,take}}});
    console.log(url);
    const RequetsOptions = GenerateRequetsOptions("GET", {});

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseGetAllPay;
        return json;

    } catch (error) {
        console.log(error);
    }

}

const PaymentFindService = async (id:string) => {
    
    const url = GenerateUrl({module:"/payment",requets:{name:"find",value:{id}}});
    const RequetsOptions = GenerateRequetsOptions("GET", {});

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseGetOnePay[];
        return json;

    } catch (error) {
        console.log(error);
    }

}

export {PaymentCreateService,PaymentUpdateService,PaymentFindAllService,PaymentFindService};
