import React,{ useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppContext'

 const PrivateRoute = ({component:Component,...rest})=>{
    const isLogin  = useContext(AppContext).isLogin;
    return(
        <Route
            {...rest}
            render={props=>
                isLogin?(<Component {...props}/>):
                (
                    <Redirect to={{
                        pathname:'/login',
                        redirectTo:props.match.url,
                    }}/>
                )
            }
        />
    )
}
export default PrivateRoute;