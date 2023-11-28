import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './notFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = props => {
    const { className } = props
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Сторінку не знайдено')}
        </div>
    )
}
