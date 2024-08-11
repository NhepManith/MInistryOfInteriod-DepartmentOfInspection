import { useSelector } from 'react-redux'; // Corrected import
import { Outlet, Navigate } from 'react-router-dom';

export default function OnlyAdminPrivateRoute(){
    const { currentUser } = useSelector((state) => state.user);
    return currentUser && currentUser.isAdmin ? <Outlet /> : <Navigate to='/sign-in' />;
}
