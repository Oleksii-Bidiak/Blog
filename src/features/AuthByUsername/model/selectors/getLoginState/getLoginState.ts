import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { LoginSchema } from '../../type/loginSchema'

export const getLoginState = (state: StateSchema): LoginSchema | undefined =>
    state?.loginForm
