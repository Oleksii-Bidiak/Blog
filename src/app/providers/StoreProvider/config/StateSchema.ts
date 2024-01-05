import { UserSchema } from 'entities/User'
import { CounterSchema } from 'entities/Counter'
import { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm: LoginSchema
}
