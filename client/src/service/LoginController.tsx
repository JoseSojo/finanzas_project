import { GenerateRequetsOptions, GenerateUrl } from "../lib/querys/HandleRequets";
import { UserLogin } from "../types/user";
import { ResponseLogin } from "../types/requets";

interface Props {
    body: UserLogin;
}

const LoginController = async ({body}: Props): Promise<ResponseLogin | null> => {
    const RequetsOptions = GenerateRequetsOptions("POST", body);
    const url = GenerateUrl({ module:"/auth/login",requets:{name:"create",value:{}} });

    try {
        const result = await fetch(url, RequetsOptions);
        if(!result.ok) {
            return null // error
        }
        console.log(result);
        return await result.json() as ResponseLogin;

    } catch (error) {
        return null // error
    }
}

export default LoginController;
