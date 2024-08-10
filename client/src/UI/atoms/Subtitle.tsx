import { FC } from "react";

interface Props {
    title: string;
    customClass?: string;
}

const Subtitle: FC<Props> = ({title,customClass}) => {

    return <h2 className={customClass}>{title}</h2>
} 

export default Subtitle;
