import { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface Props {
    customClass?: string;
    name?: string;
    placeholder?: string;
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
    ico: ReactNode
}

const InputLabelNumber: FC<Props> = ({customClass,ico,setValue,value,name,placeholder}) => {

    return <label className={`input input-bordered flex items-center gap-2 ${customClass}`}>
        {ico}
        <input 
            onChange={(e)=>setValue(Number(e.target.value))} 
            value={value == 0 ? `` : value} 
            type={`number`} 
            name={name} 
            required 
            className="w-full"
            placeholder={placeholder} 
            />
    </label>
} 

export default InputLabelNumber;
