import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
    let userLoginData = localStorage.getItem("Loginredirecting")

    return (
        <>
            {
                userLoginData ? <Outlet /> : <Navigate to={'/auth'} replace />
            }
        </>
    )
}

export default PrivateRoute;