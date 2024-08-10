import { FC, ReactNode } from "react";

interface Props {
    customClass?: string;
    type?: `button` | `submit`;
    title?: string;
    ico: ReactNode;
    click?: () => void;
}

const Button: FC<Props> = ({customClass,ico,type=`button`,title, click=()=>{}}) => {

    return <button onClick={click} type={type} className={`btn btn-primary ${customClass}`}>
        {ico}
        {title}
    </button>
} 

export default Button;
