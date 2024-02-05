import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Sceleton } from './Sceleton'

export default {
    title: 'shared/Sceleton',
    component: Sceleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sceleton>

const Template: ComponentStory<typeof Sceleton> = args => <Sceleton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    width: '100%',
    height: 200,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    width: '100%',
    height: 200,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryOrange = Template.bind({})
PrimaryOrange.args = {
    width: '100%',
    height: 200,
}
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const Circle = Template.bind({})
Circle.args = {
    borderRadius: '50%',
    height: 100,
    width: 100,
}

export const CircleDark = Template.bind({})
CircleDark.args = {
    borderRadius: '50%',
    height: 100,
    width: 100,
}
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
