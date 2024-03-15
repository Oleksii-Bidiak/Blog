import { UserRole } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFound'
import { ProfilePage } from '@/pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
    PRORFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLES_CREATE = 'articles_create',
    ARTICLES_EDIT = 'articles_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    //  last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PRORFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.ARTICLES_CREATE]: '/articles/create',
    [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    //  last
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PRORFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: RoutePath.articles_create,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: RoutePath.articles_edit,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.admin_panel,
        element: <ForbiddenPage />,
    },
    //  last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
