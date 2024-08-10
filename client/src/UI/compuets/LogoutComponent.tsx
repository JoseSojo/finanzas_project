import { FC } from "react";
import Button from "../atoms/Button";
import { BsArrowBarLeft } from "react-icons/bs";
import { useSession } from "../../context/AuthContext";
import { removeUser } from "../../lib/storage/user.storage";
import { removeToken } from "../../lib/storage/token.storage";

interface Props {}

const LogoutComponent: FC<Props> = () => {

    const sesion = useSession();

    const CloseSession = () => {
        sesion.setSession(false);
        removeUser();
        removeToken();
    }

    return (
        <Button
            click={CloseSession}
            ico={<BsArrowBarLeft />}
            title="cerrar sesión"
            customClass="btn-outline-primary"
        />
    );
}

export default LogoutComponent;
