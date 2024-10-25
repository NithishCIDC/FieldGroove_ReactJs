import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


const checkTokenExpiration = () => {
    const token = sessionStorage.getItem('token');
    if (!token) return false;

    const  decodedJwt  = jwtDecode(token);
    console.log(decodedJwt.exp);
    if (Date.now() >= decodedJwt.exp * 1000) {
        sessionStorage.removeItem('token'); 
        return false;
    }
    return true;
};

const PrivateRoute = () => {
    const isTokenValid = checkTokenExpiration();
    return isTokenValid ? <Outlet /> : <Navigate to="/" />;
};

export const ReturnRouter = () => {
    const isTokenValid = checkTokenExpiration();
    return !isTokenValid ? <Outlet /> : <Navigate to="/Dashboard" />;
};
export default PrivateRoute;