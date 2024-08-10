import { FC, ReactNode } from "react";
import { Redirect } from "wouter";

interface Props {
    children: ReactNode;
    found: boolean;
    redirect: string
}

const PrivateScreen: FC<Props> = ({children,found,redirect}) => {

    if(!found) return <Redirect href={redirect} /> 

    return (
        <>
            {children}
        </>
    )
}

export default PrivateScreen;
