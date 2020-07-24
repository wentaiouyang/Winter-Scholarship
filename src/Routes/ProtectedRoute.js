import React,{ useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../context/AppContext'

const ProtectedRoute = ({component:Component,...rest})=>{
    const isLogin = useContext(Context).isLogin;
    return(
        <Route
            {...rest}
            render={props=>
                isLogin?<Redirect to="/"/>:<Component {...props}/>
            }
        />
    )
}
export default ProtectedRoute;