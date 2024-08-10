import { GenerateRequetsOptions, GenerateUrl } from "../lib/querys/HandleRequets";
import { TransactionCreate } from "../types/transaction"
import { ResponseCreateTransaction, ResponseGetAllTransaction } from "../types/requets";

const TransactionCreateService = async (body: TransactionCreate) => {
    
    const url = GenerateUrl({module:"/transaction",requets:{name:"create",value:{}}});
    console.log(body);
    const RequetsOptions = GenerateRequetsOptions("POST",body);

    try {
        const result = await fetch(url, RequetsOptions);
        console.log(await result.json());
        if(!result.ok) {
            return null;
        }
        const json = await result.json() as ResponseCreateTransaction;
        return json;

    } catch (error) {
        console.log(error);
    }

}

const TransactionFindAllService = async ({sky,take}:{sky:number,take:number}) => {
    
    const url = GenerateUrl({module:"/transaction",requets:{name:"findAll",value:{sky,take}}});
    const RequetsOptions = GenerateRequetsOptions("GET", {});

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseGetAllTransaction;
        
        return json;

    } catch (error) {
        console.log(error);
    }

}

export {TransactionCreateService,TransactionFindAllService};
