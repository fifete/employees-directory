import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = ({authorization}) => {
    console.log(authorization)
    let auth = authorization
    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes
