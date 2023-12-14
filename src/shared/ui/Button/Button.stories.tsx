import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from '.'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Primary',
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Clear',
    theme: ButtonTheme.CLEAR,
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
    children: 'ClearInverted',
    theme: ButtonTheme.CLEAR_INVERTED,
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
    children: 'OutlineSizeL',
    theme: ButtonTheme.OUTLINE,
	 size: ButtonSize.L
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
    children: 'OutlineSizeXL',
    theme: ButtonTheme.OUTLINE,
	 size: ButtonSize.XL
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'OutlineDark',
    theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BACKGROUNG = Template.bind({})
BACKGROUNG.args = {
    children: 'BACKGROUNG',
    theme: ButtonTheme.BACKGROUNG,
}

export const BACKGROUNG_INVERTED = Template.bind({})
BACKGROUNG_INVERTED.args = {
    children: 'BACKGROUNG_INVERTED',
    theme: ButtonTheme.BACKGROUNG_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUNG_INVERTED,
    square: true,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUNG_INVERTED,
    square: true,
    size: ButtonSize.L,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUNG_INVERTED,
    square: true,
    size: ButtonSize.XL,
}
