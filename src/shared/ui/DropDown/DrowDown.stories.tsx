import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DropDown } from './DropDown'

export default {
    title: 'shared/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DropDown>

const Template: ComponentStory<typeof DropDown> = args => <DropDown {...args} />

export const Primary = Template.bind({})
Primary.args = {
    trigger: <button>Open</button>,
    items: [{ content: 'first' }, { content: 'second' }, { content: 'third' }],
}
