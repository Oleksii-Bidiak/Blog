import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
    decorators: [
        Story => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = args => <ListBox {...args} />

export const Light = Template.bind({})
Light.args = {
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}

export const LightBottomLeft = Template.bind({})
LightBottomLeft.args = {
    direction: 'bottom left',
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}

export const LightBottomRight = Template.bind({})
LightBottomRight.args = {
    direction: 'bottom right',
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}

export const LightTopRight = Template.bind({})
LightTopRight.args = {
    direction: 'top right',
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}

export const LightTopLeft = Template.bind({})
LightTopLeft.args = {
    direction: 'top left',
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}

export const Dark = Template.bind({})
Dark.args = {
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkBottomLeft = Template.bind({})
DarkBottomLeft.args = {
    direction: 'bottom left',
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}
DarkBottomLeft.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkBottomRight = Template.bind({})
DarkBottomRight.args = {
    direction: 'bottom right',
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}
DarkBottomRight.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkTopRight = Template.bind({})
DarkTopRight.args = {
    direction: 'top right',
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}
DarkTopRight.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkTopLeft = Template.bind({})
DarkTopLeft.args = {
    direction: 'top left',
    defaultValue: 'first',
    items: [
        { content: 'first', value: 'first' },
        { content: 'second', value: 'second' },
        { content: 'third', value: 'third' },
    ],
}
DarkTopLeft.decorators = [ThemeDecorator(Theme.DARK)]
