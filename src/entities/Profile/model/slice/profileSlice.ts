import { Profile } from '../types/profile'
import { ProfileSchema } from '../types/profile'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        canselEdit: state => {
            state.readonly = true
            state.form = state.data
        },
        updateProfile: (
            state: ProfileSchema,
            action: PayloadAction<Profile>,
        ) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, (state, aciton) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, aciton: PayloadAction<Profile>) => {
                    state.isLoading = false
                    state.data = aciton.payload
                    state.form = aciton.payload
                },
            )
            .addCase(fetchProfileData.rejected, (state, aciton) => {
                state.isLoading = false
                state.error = aciton.payload
            })

            .addCase(updateProfileData.pending, (state, aciton) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, aciton: PayloadAction<Profile>) => {
                    state.isLoading = false
                    state.data = aciton.payload
                    state.form = aciton.payload
                    state.readonly = true
                },
            )
            .addCase(updateProfileData.rejected, (state, aciton) => {
                state.isLoading = false
                state.error = aciton.payload
            })
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
