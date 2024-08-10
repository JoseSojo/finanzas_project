import { FC, ReactNode } from "react";
import Title from "../atoms/Title";
import LinkTo from "../atoms/LinkTo";
import { BsChatFill, BsCoin, BsCreditCard, BsHouseFill, BsThreeDots } from "react-icons/bs";
import LogoutComponent from "../compuets/LogoutComponent";

interface Props {
    children: ReactNode
}

const DashboardTemplate: FC<Props> = ({ children }) => {

    return (
        <div className="drawer drawer-end min-h-screen">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <header className="px-7 py-4 bg-slate-900 flex justify-between items-center">
                    <Title title="Finanzas" customClass="font-black text-lg" />
                    <nav>
                        <label htmlFor="my-drawer-4" className="drawer-button text-sm font-light ">
                            <BsThreeDots className="text-3xl" />
                        </label>
                    </nav>
                </header>
                {children}
                
            </div>
            
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-100 shadow-xl text-base-content min-h-full w-80 p-4 gap-4">
                {/* Sidebar content here */}
                    <LinkTo path="/" title="Inicio" ico={<BsHouseFill className="text-2xl" />} customClass="flex justify-start items-center gap-3 text-lg" />
                    <LinkTo path="/money" title="Moneda" ico={<BsCoin className="text-2xl" />} customClass="flex justify-start items-center gap-3 text-lg" />
                    <LinkTo path="/payment" title="Pagos" ico={<BsCreditCard className="text-2xl" />} customClass="flex justify-start items-center gap-3 text-lg" />
                    <LinkTo path="/themes" title="Categorias" ico={<BsChatFill className="text-2xl" />} customClass="flex justify-start items-center gap-3 text-lg" />
                    <LogoutComponent />
                </ul>
            </div>
        </div>
    )
}

export default DashboardTemplate;
