import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from '..'

describe('Button', () => {
    test('Test', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('Test', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
