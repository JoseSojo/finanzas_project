import { FC, FormEvent, useEffect, useState } from "react";
import InputLabel from "../../atoms/InputLabel";
import { BsChatFill, BsSendFill } from "react-icons/bs";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import { ThemeData } from "../../../types/theme";
import { ThemeCreateService, ThemeFindAllService } from "../../../service/ThemeService";

interface Props {}

type TypeEgresIngres = `INGRESO` | `EGRESO`;

const MoneySection:FC<Props> = ({}) => {

    const [load, setLoad] = useState(true);
    const [themes, setThemes] = useState<ThemeData[] | null>(null);
    const [method, setMethod] = useState<`POST` | `PUT`>(`POST`);

    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);
    const [type, setType] = useState<TypeEgresIngres>(`INGRESO`);

    const [updateId, setUpdateId] = useState(``);
    const [render, setRender] = useState(false);

    const Renderized = () => setRender(!render);

    const [sky, setSky] = useState(0);
    const [take, setTake] = useState(10);

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const ExecuteRequets = async () => {
            if(method === "POST") {
                await ThemeCreateService({name,description,type});
                return Renderized();
            } 

            // return Renderized();
        }
        ExecuteRequets()
    } 

    useEffect(() => {
        const ExecuteRequets = async () => {
            setLoad(true);
            const result = await ThemeFindAllService({sky,take});
            if(!result) return setLoad(false);

            setThemes(result.body);
            setLoad(false);
            setSky(sky+take);
            setTake(take);
            setMethod("POST");
            setUpdateId(``);
            setName(``);
            setDescription(``);
            return;
        }
        ExecuteRequets();
    }, [render]);
    
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[.4fr_1fr]">
            <form onSubmit={HandleSubmit} className="card">
                <div className="card-body">
                    <Title title={method == "POST" ? "Crear categoría" : `Actualizar monto en ${name}`} customClass="text-xl font-bold text-gray-700" />
                    { 
                        method === "POST" 
                        && <>
                            <InputLabel ico={<></>} setValue={setName} value={name} placeholder="Nombre" customClass="" />
                            <InputLabel ico={<BsChatFill />} setValue={setDescription} value={description} placeholder="Descripción" customClass="" />
                            <select onChange={(e)=> setType(e.target.value as TypeEgresIngres)} className="select select-bordered w-full max-w-xs      ">
                                <option disabled selected>Tipo?</option>
                                <option value={`INGRESO`}>INGRESO</option>
                                <option value={`EGRESO`}>EGRESO</option>
                            </select>
                        </>
                    }
                    
                    <Button ico={<BsSendFill />} type="submit" title={method === "POST" ? "crear" : "actualizar"} />
                </div>
            </form>
            <div className="p-3 pt-5">
                {
                    load 
                    ? <p className="py-5 h-16 text-center    rounded-[20px] bg-gray-300 animate-pulse w-full">cargando...</p>
                    : themes && themes.length > 0
                        ? <>
                            <table className="table w-full">
                                <thead>
                                    <td className="text-gray-700 text-md">Tipo</td>
                                    <td className="text-gray-700 text-md">Nombre</td>
                                    <td className="text-gray-700 text-md">Descripción</td>
                                </thead>
                                <tbody>
                                    {themes?.map(item => (
                                        <tr>
                                            <td>{item.type}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                        :<p className="py-5 h-16 text-center    rounded-[20px] bg-gray-300 w-full">No hay categorías creadas</p>
                }
                
            </div>
        </section>
    );
};

export default MoneySection;
