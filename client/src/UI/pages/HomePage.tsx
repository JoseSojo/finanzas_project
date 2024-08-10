import { FC, useEffect, useState } from "react";
import { CountAll } from "../../service/HomeController";
import { CountForDashboard } from "../../types/requets";
import Title from "../atoms/Title";
import CreateTransaction from "../forms/CreateTransaction";
import { TransactionFindAllService } from "../../service/TransactionService";
import { TransactionData } from "../../types/transaction";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { MoneyFindAllService } from "../../service/MoneyService";
import { MoneyData } from "../../types/money";
import CustomCard from "../cards/CustomCard";

interface Props {}

const HomePage: FC<Props> = ({}) => {
    
    const [count, setCount] = useState<CountForDashboard>({money:0,pay:0,sessions:0,theme:0,transactions:0});
    const [reload, setReload] = useState(false);
    const [transactions, setTransactions] = useState<TransactionData[] | []>([]);

    const [moneys, setMoneys] = useState<MoneyData[] | []>([]);

    const [skyp, setSkyp] = useState(0);
    const [take, setTake] = useState(10);

    const Recharge = () => setReload(!reload);

    useEffect(() => {
        const ExecuteRequets = async () => {
            const result = await TransactionFindAllService({sky:skyp,take:take});
            if(!result) return;
            setTake(take);
            console.debug(result.body);
            setTransactions(result.body);
        }
        ExecuteRequets();
        
        const ExecuteRequets2 = async () => {
            const result = await MoneyFindAllService({sky:0,take:10});
            if(!result) return;
            setMoneys(result.body);
        }
        ExecuteRequets2();

        const ExecuteRequets3 = async () => {
            const result = await CountAll();
            if(!result) return;
            setCount(result.body._count);
        }
        ExecuteRequets3();
    }, [reload]);

    return (
        <div className="py-3 px-5">
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                <div className={`card card-compact border`}>
                    <div className="card-body flex justify-between items-center ">
                        <Title title="Saldo actual" customClass="card-title" />
                        {
                            moneys && moneys.length > 0 && moneys.map(item => (<div className="badge badge-lg badge-primary badge-outline text-xs font-black">{item.name}: {item.mount}</div>))
                        }
                    </div>
                </div>
                <CustomCard count={count.money.toString()} title="Moneda" customClass="shadow-xl glass" />
                <CustomCard count={count.pay.toString()} title="Métodos" customClass="shadow-xl glass" />
                <CustomCard count={count.theme.toString()} title="Categorías" customClass="shadow-xl glass" />
                <CustomCard count={count.transactions.toString()} title="Transacciones" customClass="shadow-xl glass" />
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-[.6fr_1fr] mt-4">

                <section className="card">
                    <div className="card-body">
                        <CreateTransaction update={Recharge} />
                    </div>
                </section>

                <div className="overflow-x-auto">
                    <div className="my-2 bg-base-300 w-full rounded-[20px] flex justify-between items-center">
                        <div className="join">
                            {
                                skyp > 0 &&
                                <Button
                                    click={()=>{setSkyp(skyp-take);Recharge()}}
                                    ico={<></>}
                                    customClass="bg-transparent border-0 text-gray-100"
                                    title="«"
                                /> 
                            }
                            <Button
                                click={()=>{}}
                                ico={<></>}
                                customClass="bg-transparent border-0 text-gray-100"
                                title={`resultados: ${take}`}
                            />
                            {
                                skyp+10 < count.transactions &&
                                <Button
                                    click={()=>{setSkyp(skyp+take);Recharge()}}
                                    ico={<></>}
                                    customClass="bg-transparent border-0 text-gray-100"
                                    title="»"
                                />
                            }
                        </div>
                        
                        <Text 
                            title={`${count.transactions > skyp+10 ? skyp+10 : count.transactions} / ${count.transactions}`} 
                            customClass="px-4 btn rounded-[20px] border border-primary"
                        />
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Método</th>
                            <th>Moneda</th>
                            <th>Categoria</th>
                            <th>Monto</th>
                        </tr>
                        </thead>
                        <tbody>
                            { transactions && transactions.length > 0 && transactions.map(item => (
                                <tr>
                                    <td className="py-1 text-sm">{item.payReference.name}</td>
                                    <td className="py-1 text-sm">{item.payReference.moneyReference.name}</td>
                                    <td className="py-1 text-sm">{item.themeReference.name}</td>
                                    <td className="py-1 text-sm">{item.mount}</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default HomePage;
