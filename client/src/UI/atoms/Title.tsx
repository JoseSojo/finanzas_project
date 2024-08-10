import { FC } from "react";

interface Props {
    title: string;
    customClass?: string;
}

const Title: FC<Props> = ({title,customClass}) => {

    return <h1 className={customClass}>{title}</h1>
} 

export default Title;
