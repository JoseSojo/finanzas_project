import { GenerateRequetsOptions, GenerateUrlStandard } from "../lib/querys/HandleRequets"
import { ResponseGetCount } from "../types/requets";

export const CountAll = async () => {

    const url = GenerateUrlStandard({module:"/user",ext:`dashboard`});
    const requetsOptions = GenerateRequetsOptions("GET",{});
    console.log(url);

    const result = await fetch(url, requetsOptions);
    if(!result.ok) return null;

    const json = await result.json() as ResponseGetCount;
    return json;
}
