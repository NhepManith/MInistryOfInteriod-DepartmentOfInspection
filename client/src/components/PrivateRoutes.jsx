import { useSelector } from 'react-redux'; // Corrected import
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}

export default PrivateRoutes;
