import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import cls from './pageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = props => {
    const { className } = props
    const { t } = useTranslation('error')

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            {t('Непередбачувана помилка')}
            <Button theme={ButtonTheme.OUTLINE} onClick={reloadPage}>
                {t('Оновити сторінку')}
            </Button>
        </div>
    )
}
