import { memo, useCallback } from 'react'
import { Additionals, classNames } from '@/shared/lib/classNames/classNames'
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'
import cls from './code.module.scss'
import { Button } from '../Button'

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props
    const additionals: Additionals = [className]

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.code, {}, additionals)}>
            <code>
                <Button className={cls.copyBtn}>
                    <CopyIcon onClick={onCopy} />
                </Button>
                {text}
            </code>
        </pre>
    )
})
