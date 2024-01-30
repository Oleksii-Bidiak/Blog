import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextSize, TextTheme } from './Text'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Primary title',
    text: 'Primary text',
}

export const TextDark = Template.bind({})
TextDark.args = {
    title: 'TextDark title',
    text: 'TextDark text',
}
TextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextOnlyTitle = Template.bind({})
TextOnlyTitle.args = {
    title: 'TextOnlyTitle',
}

export const TextOnlyTitleDark = Template.bind({})
TextOnlyTitleDark.args = {
    title: 'TextOnlyTitle title',
}
TextOnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextOnly = Template.bind({})
TextOnly.args = {
    text: 'TextOnly',
}

export const TextOnlyDark = Template.bind({})
TextOnlyDark.args = {
    text: 'TextOnly text',
}
TextOnlyDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextError = Template.bind({})
TextError.args = {
    title: 'TextError title',
    text: 'TextError text',
    theme: TextTheme.ERROR,
}

export const TextErrorDark = Template.bind({})
TextErrorDark.args = {
    title: 'TextDark title',
    text: 'TextDark text',
    theme: TextTheme.ERROR,
}
TextErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
    title: 'Primary title',
    text: 'Primary text',
    size: TextSize.L,
}
