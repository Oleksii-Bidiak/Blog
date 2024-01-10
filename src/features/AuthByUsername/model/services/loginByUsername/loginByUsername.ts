import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { userActions, User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

// enum LoginErrors {
//     INNCORECT_DATA = '',
//     SERVER_ERROR = '',
// }

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (userData, ThunkApi) => {
    const { dispatch, extra, rejectWithValue } = ThunkApi
    try {
        const response = await extra.api.post<User>('/login', userData)

        if (!response.data) {
            throw new Error()
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        )
        dispatch(userActions.setAuthData(response.data))
        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue('error')
    }
})
