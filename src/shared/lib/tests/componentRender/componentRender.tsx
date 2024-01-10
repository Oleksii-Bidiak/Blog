import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'

interface componentRenderOntions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(
    component: ReactNode,
    options: componentRenderOntions = {},
) {
    const { route = '/', initialState } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    )
}
