import { FC } from "react";

interface Props {
    title: string;
    customClass?: string;
}

const Text: FC<Props> = ({title,customClass}) => {

    return <p className={customClass}>{title}</p>
} 

export default Text;
