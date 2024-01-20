import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const LightPrimary = Template.bind({})
LightPrimary.args = {
    label: 'Вкажіть значення',
    options: [
        { value: '1', content: 'First Element' },
        { value: '2', content: 'Second Element' },
    ],
}
