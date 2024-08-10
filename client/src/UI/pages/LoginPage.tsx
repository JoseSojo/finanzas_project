import { FC, FormEvent, useState } from "react";
import LoginController from "../../service/LoginController";
import { useLocation } from "wouter";
import { useSession } from "../../context/AuthContext";
import { setUser } from "../../lib/storage/user.storage";
import { setToken } from "../../lib/storage/token.storage";
import { BsLockFill, BsPersonFill } from "react-icons/bs";
import Title from "../atoms/Title";
import InputLabel from "../atoms/InputLabel";

interface Props {}

const LoginPage: FC<Props> = ({}) => {

    const setLocation = useLocation()[1];
    const {setSession} = useSession();

    const [access, setAccess] = useState(``);
    const [password, setPassword] = useState(``);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState<string | boolean>(false);

    const HandleError = (err: string | string[] | any) => {
        console.log(err);
        console.log(load,error);
    }

    const SubmitController = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoad(true);
        const body = {access,password};

        const ExecuteRequets = async () => {
            const result = await LoginController({ body });
            if(!result) {
                setError(`Error temporal`);
                setLoad(false);
                return;
            }

            setUser(result.body.userReference);
            setToken(result.token);
            setSession(true);
            setLocation(`/home`);
            return HandleError;
            
        } 
        ExecuteRequets();
    }

    return (
        <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <form onSubmit={SubmitController} className="grid place-items-center">
                <div className="grid gap-3">
                    <Title title="Iniciar sesión" customClass="text-2xl font-black text-center" />
                    
                    <InputLabel ico={<BsPersonFill />} setValue={setAccess} value={access} placeholder="Correo Electrónico" name="access" type="text" />
                    <InputLabel ico={<BsLockFill />} setValue={setPassword} value={password} placeholder="Contraseña" name="password" type="password" />
                    
                    
                    <button type="submit" className="btn btn-primary">entrar</button>
                </div>
            </form>
            <div className="grid place-items-center">secundario</div>
        </div>
    )
}

export default LoginPage;
