import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { EmailContext } from "../context/email/EmailContext";
import { SenhaContext } from "../context/senha/SenhaContext";

const PrivateRoutes = ({children}) => {
    const { email } = useContext(EmailContext);
    const { senha } = useContext(SenhaContext);
    return email && senha ? children : <Navigate to="/" />
}
export default PrivateRoutes;