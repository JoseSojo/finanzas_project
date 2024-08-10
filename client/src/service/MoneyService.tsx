import { GenerateRequetsOptions, GenerateUrl } from "../lib/querys/HandleRequets";
import { MoneyCreate, MoneyUpdate } from "../types/money"
import { ResponseCreateMoney, ResponseGetAllMoney, ResponseGetOneMoney, ResponseUpdateMoney } from "../types/requets";

const MoneyCreateService = async (body: MoneyCreate) => {
    
    const url = GenerateUrl({module:"/money",requets:{name:"create",value:{}}});
    const RequetsOptions = GenerateRequetsOptions("POST",body);

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }
        const json = await result.json() as ResponseCreateMoney;
        return json;

    } catch (error) {
        console.log(error);
    }

}

const MoneyUpdateService = async (body: MoneyUpdate,id:string) => {
    
    const url = GenerateUrl({module:"/money",requets:{name:"update",value:{id}}});
    const RequetsOptions = GenerateRequetsOptions("PUT",body);

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseUpdateMoney[];
        return json;

    } catch (error) {
        console.log(error);
    }

}

const MoneyFindAllService = async ({sky,take}:{sky:number,take:number}) => {
    
    const url = GenerateUrl({module:"/money",requets:{name:"findAll",value:{sky,take}}});
    const RequetsOptions = GenerateRequetsOptions("GET", {});

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseGetAllMoney;
        
        return json;

    } catch (error) {
        console.log(error);
    }

}

const MoneyFindService = async (id:string) => {
    
    const url = GenerateUrl({module:"/money",requets:{name:"find",value:{id}}});
    const RequetsOptions = GenerateRequetsOptions("GET", {});

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseGetOneMoney[];
        return json;

    } catch (error) {
        console.log(error);
    }

}

export {MoneyCreateService,MoneyUpdateService,MoneyFindAllService,MoneyFindService};
