import { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface Props {
    customClass?: string;
    type?: `text` | `password` | `email`;
    name?: string;
    placeholder?: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    ico: ReactNode
}

const InputLabel: FC<Props> = ({customClass,ico,setValue,value,name,placeholder,type}) => {

    return <label className={`input input-bordered flex items-center gap-2 ${customClass}`}>
        {ico}
        <input 
            onChange={(e)=>setValue(e.target.value)} 
            value={value} 
            type={type} 
            name={name} 
            required 
            placeholder={placeholder} 
            />
    </label>
} 

export default InputLabel;
