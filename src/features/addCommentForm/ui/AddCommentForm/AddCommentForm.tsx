import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getCommentFormText } from '../../model/selectors/getCommentFormText/getCommentFormText'
import { getCommentFormError } from '../../model/selectors/getCommentFormError/getCommentFormError'
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice'
import {
    Additionals,
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import cls from './addCommentForm.module.scss'
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader'
import { HStack } from '@/shared/ui/Stack'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props
    const { t } = useTranslation('article')
    const text = useSelector(getCommentFormText)
    const error = useSelector(getCommentFormError)
    const dispatch = useAppDispatch()

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value))
        },
        [dispatch],
    )

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                max
                justify="between"
                className={classNames(cls.addCommentForm, mods, additionals)}>
                <Input
                    className={cls.input}
                    value={text || ''}
                    onChange={onCommentTextChange}
                    placeholder={t('Введіть текст коментаря')}
                />
                <Button
                    onClick={onSendCommentHandler}
                    theme={ButtonTheme.OUTLINE}>
                    {t('Відправити')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
