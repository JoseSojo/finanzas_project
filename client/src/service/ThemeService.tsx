import { GenerateRequetsOptions, GenerateUrl } from "../lib/querys/HandleRequets";
import { ThemeCreate } from "../types/theme"
import { ResponseCreateTheme, ResponseGetAllTheme, ResponseGetOneTheme } from "../types/requets";

const ThemeCreateService = async (body: ThemeCreate) => {
    
    const url = GenerateUrl({module:"/themes",requets:{name:"create",value:{}}});
    const RequetsOptions = GenerateRequetsOptions("POST",body);

    try {
        
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseCreateTheme[];
        return json;

    } catch (error) {
        console.log(error);
    }

}

const ThemeFindAllService = async ({sky,take}:{sky:number,take:number}) => {
    
    const url = GenerateUrl({module:"/themes",requets:{name:"findAll",value:{sky,take}}});
    const RequetsOptions = GenerateRequetsOptions("GET", {});

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseGetAllTheme;
        return json;

    } catch (error) {
        console.log(error);
    }

}

const ThemeFindService = async (id:string) => {
    
    const url = GenerateUrl({module:"/themes",requets:{name:"find",value:{id}}});
    const RequetsOptions = GenerateRequetsOptions("GET", {});

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null;
        }

        const json = await result.json() as ResponseGetOneTheme[];
        return json;

    } catch (error) {
        console.log(error);
    }

}

export {ThemeCreateService,ThemeFindAllService,ThemeFindService};
