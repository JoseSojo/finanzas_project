import { FC, FormEvent, useEffect, useState } from "react";
import Title from "../atoms/Title";
import { ThemeData } from "../../types/theme";
import { PaymentData } from "../../types/pay";
import { PaymentFindAllService } from "../../service/PaymentService";
import { ThemeFindAllService } from "../../service/ThemeService";
import Button from "../atoms/Button";
import { Bs123, BsPlusSquare, BsSendFill, BsXCircle } from "react-icons/bs";
import InputLabelNumber from "../atoms/InputNumber";
import { TransactionCreateService } from "../../service/TransactionService";
import { getUser } from "../../lib/storage/user.storage";
import Text from "../atoms/Text";

interface Props {
    update: () => void
}

type TypeEgres = `INGRESO` | `EGRESO` | `ALL`

const CreateTransaction: FC<Props> = ({update}) => {

    const [error, setError] = useState(``);
    const [type, setType] = useState<TypeEgres>(`ALL`)
    const [themes, setThemes] = useState<ThemeData[] | []>([]);
    const [themesSelected, setThemesSelected] = useState<ThemeData[] | []>([]);
    const [payments, setPaymets] = useState<PaymentData[] | []>([]);

    const [themeId, setThemeId] = useState(``);
    const [payId, setPayId] = useState(``);
    const [mount, setMount] = useState<number>(0);
    const [date, setDate] = useState(``);

    useEffect(() => {
        const ExecuteRequets = async () => {
            const paymentPromise = PaymentFindAllService({sky:0,take:30});
            const themePromise = ThemeFindAllService({sky:0,take:30});

            const themeResult = await themePromise;
            const paymentResult = await paymentPromise;

            if(!themeResult || !paymentResult) return;

            setThemes(themeResult.body);
            setThemesSelected(themeResult.body);
            setType("ALL");
            setPaymets(paymentResult.body);
        }
        ExecuteRequets();
    }, []);

    useEffect(() => {
        const prev = themes;
        if(type === "ALL") return setThemesSelected(themes);
        const newThemes = prev.filter(key => key.type === type);
        setThemesSelected(newThemes);
    }, [type])

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const moneyFind = payments.find(key => key.id === payId);
        if(!payId) return setError(`Debes seleccionar un método de pago.`);
        if(!mount) return setError(`Debes ingresar un monto.`);
        if(!date) return setError(`Debes ingresar una fecha.`);
        if(!themeId) return setError(`Debes seleccionar una categoría.`);
        if(!moneyFind) return setError(`Error con el método de pago.`);
        if(type === `EGRESO` && mount > moneyFind.moneyReference.mount) return setError(`El monto no debe ser mayor al valor de la moneda.`);


        const ExecuteRequets = async () => {
            const user = getUser();
            if(!user) return;
            console.log({ payId,themeId,userId:user.id,mount })
            await TransactionCreateService({ payId,themeId,userId:user.id,mount,date });

            update();
            return;
        }
        ExecuteRequets();        
    }

    return(
        <>
            <Title title="Crear" customClass="text-2xl font-black    text-center" />
            <form onSubmit={HandleSubmit}>
                {
                    error && <Text title={error} customClass="text-sm font-bold text-center text-error mb-3" />
                }
                {
                    type === "EGRESO" || type === "INGRESO" 
                    ? <>
                        <select onChange={(e)=>setThemeId(e.target.value)} className="select       select-bordered w-full my-1">
                            <option disabled selected>Categoría</option>
                            { themesSelected && themesSelected.length > 0 && themesSelected.map(item => (
                                <option value={item.id}>{item.type} - {item.name}</option>
                            )) }
                        </select>
                        <select onChange={(e)=>setPayId(e.target.value)} className="select       select-bordered w-full my-1">
                            <option disabled selected>Método de pago</option>
                            { payments && payments.length > 0 && payments.map(item => (
                                <option value={item.id}>{item.name}</option>
                            )) }
                        </select>
                        {
                            payId && <Text title={`tienes ${payments.find(key=>key.id===payId)?.moneyReference.mount} ${payments.find(key=>key.id===payId)?.moneyReference.name}`} customClass="text-sm font-bold mb-3" />
                        }

                        <InputLabelNumber ico={<Bs123 />} setValue={setMount} value={mount} placeholder="Monto" customClass="my-1" />
                        
                        <input
                            onChange={(e)=>setDate(e.target.value)} 
                            value={date} 
                            type={`date`} 
                            required 
                            className="w-full input input-bordered my-2 "
                            placeholder={`Fecha`} 
                        />
                        
                        <Button
                            ico={<BsSendFill />}
                            title="crear"
                            customClass="gap-5 w-full"
                            type="submit"
                        />
                    </>
                    : <div className="grid place-items-center gap-3">
                        <Button
                            click={()=>setType(`INGRESO`)}
                            ico={<BsPlusSquare />}
                            title="INGRESO"
                            customClass="btn-success w-56"
                        />
                        <Button
                            click={()=>setType(`EGRESO`)}
                            ico={<BsXCircle />}
                            title="EGRESO"
                            customClass="btn-error w-56"
                        />
                    </div>
                }
            </form>
        </>
    )
} 

export default CreateTransaction;
