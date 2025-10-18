import { Navigate, Outlet } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout";
const ProtectedRoutes = ({children}) => {
   
    const isAuthenticated = true;
    const loading =  false;

    if(loading){
        return <div>loading...</div>;
    }

    if(!isAuthenticated){
        return <Navigate to="/" replace />;
    }
  
    return (
    <DashboardLayout>{children ? children : <Outlet />}</DashboardLayout>
  )
}

export default ProtectedRoutes