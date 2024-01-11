import { Profile } from '../types/profile'
import { ProfileSchema } from '../types/profile'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, (state, aciton) => {})
            .addCase(
                fetchProfileData.fulfilled,
                (state, aciton: PayloadAction<Profile>) => {
                    state.isLoading = false
                    state.data = aciton.payload
                },
            )
            .addCase(fetchProfileData.rejected, (state, aciton) => {})
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
