import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'not-authenticated',
        user:{},
        token:null
    },

    reducers: {
        onLogin : ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.token = payload.token
        },

        onLogout : ( state ) => {
            state.status = 'not-authenticated';
            state.user = {};
        },
    }
});


export const { onLogin, onLogout } = authSlice.actions