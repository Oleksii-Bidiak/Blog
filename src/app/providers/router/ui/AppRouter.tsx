import { getAuthUserData } from 'entities/User'
import { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => {
    const isAuth = useSelector(getAuthUserData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.authOnly && !isAuth) {
                return false
            }
            return true
        })
    }, [isAuth])

    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="content">{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    )
}

export default memo(AppRouter)
