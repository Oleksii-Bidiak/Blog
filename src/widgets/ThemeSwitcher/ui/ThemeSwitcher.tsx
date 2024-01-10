import { memo } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    )
})
