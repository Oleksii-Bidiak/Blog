import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { EditableProfileCard } from 'features/editableProfileCard'

const ProfilePage = () => {
    const { t } = useTranslation('profile')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <Text title={t('Профіль не знайдено')} />
    }

    return (
        <Page>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
