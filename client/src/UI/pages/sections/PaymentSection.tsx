import { FC, FormEvent, useEffect, useState } from "react";
import InputLabel from "../../atoms/InputLabel";
import { BsCoin, BsSendFill } from "react-icons/bs";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import { MoneyData } from "../../../types/money";
import { MoneyFindAllService } from "../../../service/MoneyService";
import { PaymentData } from "../../../types/pay";
import { PaymentCreateService, PaymentFindAllService } from "../../../service/PaymentService";

interface Props {}

const PaymentSection:FC<Props> = ({}) => {

    const [load, setLoad] = useState(true);
    const [moneys, setMoneys] = useState<MoneyData[] | null>(null);
    const [payments, setPaymets] = useState<PaymentData[] | null>(null);
    const [method, setMethod] = useState<`POST` | `PUT`>(`POST`);
    
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);
    const [moneyId, setMoneyId] = useState(``);

    const [render, setRender] = useState(false);

    const Renderized = () => setRender(!render);

    const [sky, setSky] = useState(0);
    const [take, setTake] = useState(10);

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const ExecuteRequets = async () => {
            if(method === "POST") {
                await PaymentCreateService({name,description,moneyId});
                return Renderized();
            } 

            return Renderized();
        }
        ExecuteRequets()
    } 

    useEffect(() => {
        const ExecuteRequets = async () => {
            setLoad(true);
            const result = await MoneyFindAllService({sky:0,take:20});
            const payments = await PaymentFindAllService({sky,take})
            if(!result) return setLoad(false);
            if(!payments) return setLoad(false);

            setPaymets(payments.body);
            setMoneys(result.body);
            setLoad(false);
            setSky(sky+take);
            setTake(take);
            setMethod("POST");
            setName(``);
            setDescription(``);
            setMoneyId(``);
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
                        && <>
                            <InputLabel ico={<BsCoin />} setValue={setName} value={name} placeholder="Nombre" customClass="" />
                            <select onChange={(e)=>setMoneyId(e.target.value)} className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Who shot first?</option>
                                {
                                    moneys && moneys.length > 0 && moneys.map((item) => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    )) 
                                }
                            </select>
                            <InputLabel ico={<BsCoin />} setValue={setDescription} value={description} placeholder="Descripción" customClass="" />

                        </>
                    }
                    <Button ico={<BsSendFill />} type="submit" title={method === "POST" ? "crear" : "actualizar"} />
                </div>
            </form>
            <div className="p-3 pt-5">
                {
                    load 
                    ? <p className="py-5 h-16 text-center    rounded-[20px] bg-gray-300 animate-pulse w-full">cargando...</p>
                    : payments && payments.length > 0
                        ? <>
                            <table className="table w-full">
                                <thead>
                                    <td className="text-gray-700 text-md">Nombre</td>
                                    <td className="text-gray-700 text-md">Descripción</td>
                                </thead>
                                <tbody>
                                    {payments?.map(item => (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
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

export default PaymentSection;
