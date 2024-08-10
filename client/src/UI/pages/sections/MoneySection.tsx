import { FC, FormEvent, useEffect, useState } from "react";
import InputLabel from "../../atoms/InputLabel";
import { Bs123, BsCoin, BsPenFill, BsSendFill } from "react-icons/bs";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import { MoneyData } from "../../../types/money";
import { MoneyCreateService, MoneyFindAllService, MoneyUpdateService } from "../../../service/MoneyService";
import InputLabelNumber from "../../atoms/InputNumber";

interface Props {}

const MoneySection:FC<Props> = ({}) => {

    const [load, setLoad] = useState(true);
    const [moneys, setMoneys] = useState<MoneyData[] | null>(null);
    const [method, setMethod] = useState<`POST` | `PUT`>(`POST`);
    const [name, setName] = useState(``);
    const [mount, setMount] = useState(0);
    const [updateId, setUpdateId] = useState(``);
    const [render, setRender] = useState(false);

    const Renderized = () => setRender(!render);

    const [sky, setSky] = useState(0);
    const [take, setTake] = useState(10);

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // let url = GenerateUrl({ module:"/money",requets:{name:"create",value:{}} });
        // if(method === "POST") url = GenerateUrl({ module:"/money",requets:{name:"update",value:{ id:updateId }} });
        // const RequetsOptions = GenerateRequetsOptions(method === "POST" ? "POST" : "PUT", method === "POST" ? {name,mount} : {mount});

        const ExecuteRequets = async () => {
            if(method === "POST") {
                await MoneyCreateService({name,mount});
                return Renderized();
            } 

            await MoneyUpdateService({mount}, updateId);
            return Renderized();
        }
        ExecuteRequets()
    } 

    useEffect(() => {
        const ExecuteRequets = async () => {
            setLoad(true);
            const result = await MoneyFindAllService({sky,take});
            if(!result) return setLoad(false);

            setMoneys(result.body);
            setLoad(false);
            setSky(sky+take);
            setTake(take);
            setMethod("POST");
            setUpdateId(``);
            setName(``);
            return;
        }
        ExecuteRequets();
    }, [render]);
    
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[.4fr_1fr]">
            <form onSubmit={HandleSubmit} className="card">
                <div className="card-body">
                    <Title title={method == "POST" ? "Crear moneda" : `Actualizar monto en ${name}`} customClass="text-xl font-bold text-gray-700" />
                    { 
                        method === "POST" 
                        && <InputLabel ico={<BsCoin />} setValue={setName} value={name} placeholder="Nombre" customClass="" />
                    }
                    <InputLabelNumber ico={<Bs123 />} setValue={setMount} value={mount} placeholder="Nombre" customClass="" />
                    <Button ico={<BsSendFill />} type="submit" title={method === "POST" ? "crear" : "actualizar"} />
                </div>
            </form>
            <div className="p-3 pt-5">
                {
                    load 
                    ? <p className="py-5 h-16 text-center    rounded-[20px] bg-gray-300 animate-pulse w-full">cargando...</p>
                    : moneys && moneys.length > 0
                        ? <>
                            <table className="table w-full">
                                <thead>
                                    <td className="text-gray-700 text-md">Nombre</td>
                                    <td className="text-gray-700 text-md">Monto</td>
                                    <td className="text-gray-700 text-md">acciones</td>
                                </thead>
                                <tbody>
                                    {moneys?.map(item => (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.mount}</td>
                                            <td>
                                                <Button
                                                    customClass=""
                                                    title=""
                                                    click={() => {
                                                        setUpdateId(item.id);
                                                        setMethod("PUT");
                                                        setName(item.name);
                                                        setMount(item.mount);
                                                        return;
                                                    }}
                                                    ico={<BsPenFill className="text-gray-100" />}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                        :<p className="py-5 h-16 text-center    rounded-[20px] bg-gray-300 w-full">No hay monedas creadas</p>
                }
                
            </div>
        </section>
    );
};

export default MoneySection;
