import { Outlet, Navigate } from 'react-router-dom'
import { context } from '../../context/Context';

export default function PrivateRoute() {
  const { user } = context(); 

  return user ? <Outlet/> : <Navigate to="/login"/>
}