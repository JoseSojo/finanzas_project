import { GenerateRequetsOptions, GenerateUrl } from "../lib/querys/HandleRequets";
import { UserRegister } from "../types/user";
import { ResponseRegister } from "../types/requets";

interface Props {
    body: UserRegister;
}

const RegisterController = async ({body}: Props): Promise<ResponseRegister | null> => {
    const RequetsOptions = GenerateRequetsOptions("POST", body);
    const url = GenerateUrl({ module:"/auth/register",requets:{name:"create",value:{}} });

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null // error
        }
        return await result.json() as ResponseRegister;

    } catch (error) {
        return null // error
    }
}

export default RegisterController;
