import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

function HomePage() {
    const { t } = useTranslation()
    return <Page>{t('Головна')}</Page>
}

export default HomePage
