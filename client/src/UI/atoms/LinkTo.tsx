import { FC, ReactNode } from "react";
import { useLocation } from "wouter";

interface Props {
    path: string;
    ico?: ReactNode;
    title: string;
    customClass?: string
}

const LinkTo: FC<Props> = ({path,ico,title,customClass}) => {
    const setLocation = useLocation()[1];

    return (
        <button className={customClass} onClick={()=>setLocation(path)}>
            {ico}
            {title}
        </button>
    );
}

export default LinkTo;
