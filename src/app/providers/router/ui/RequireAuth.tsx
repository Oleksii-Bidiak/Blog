import { getAuthUserData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(getAuthUserData)
    const location = useLocation()

    if (!auth) {
        return (
            <Navigate to={RoutePath.home} state={{ from: location }} replace />
        )
    }

    return children
}
