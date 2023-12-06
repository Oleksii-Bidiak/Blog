import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ThemeButton } from '.'
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
    theme: ThemeButton.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
