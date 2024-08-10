import { FC } from "react";
import Title from "../atoms/Title";

interface Props {
    title: string;
    count: string;
    customClass?: string;
}

const CustomCard: FC<Props> = ({count,title,customClass}) => {

    return (
        <div className={`card card-compact border-t ${customClass}`}>
            <div className="card-body flex justify-between items-center ">
                <Title title={title} customClass="card-title" />
                <div className="badge badge-lg badge-primary badge-outline">{count}</div>
            </div>
        </div>
    )
}

export default CustomCard;
