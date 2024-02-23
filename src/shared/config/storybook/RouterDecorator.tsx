import { ArgsStoryFn } from '@storybook/csf'
import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: Story, args: ArgsStoryFn) => (
    <BrowserRouter>
        <StoryComponent {...args} />
    </BrowserRouter>
)
