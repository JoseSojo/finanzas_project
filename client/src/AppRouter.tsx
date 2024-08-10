import { Route } from "wouter"
import { useSession } from "./context/AuthContext"
import HomePage from "./UI/pages/HomePage";
import LoginPage from "./UI/pages/LoginPage";
import RegisterPage from "./UI/pages/RegisterPage";
import ProfilePage from "./UI/pages/ProfilePage";
import PrivateScreen from "./UI/template/PrivateScreen";
import DashboardTemplate from "./UI/template/DashboardTemplate";
import MoneySection from "./UI/pages/sections/MoneySection";
import PaymentSection from "./UI/pages/sections/PaymentSection";
import ThemeSection from "./UI/pages/sections/ThemeSection";

const AppRouter = () => {

    const session = useSession();

    // moneda
    // pago
    // tema
    // transacciones
    // graficos

    return (
        <>
            <PrivateScreen found={!session.session} redirect="/home">
                <Route path={`/`} component={LoginPage} />
                <Route path={`/login`} component={LoginPage} />
                <Route path={`/register`} component={RegisterPage} />
            </PrivateScreen>

            <PrivateScreen found={session.session} redirect="/login">
                <DashboardTemplate>
                    <Route path={`/`} component={HomePage} />
                    <Route path={`/home`} component={HomePage} />
                    <Route path={`/profile`} component={ProfilePage} />

                    <Route path={`/money`} component={MoneySection} />
                    <Route path={`/payment`} component={PaymentSection} />
                    <Route path={`/themes`} component={ThemeSection} />
                </DashboardTemplate>
            </PrivateScreen>
        </>
    )
}

export default AppRouter
