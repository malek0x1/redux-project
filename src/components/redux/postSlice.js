import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
        isLogin: false,
        username: "malek",
        password: "malek"
    },
    reducers: {
        addPost: (state, action) => {
            state.items.push(action.payload)
        },
        login: (state, action) => {
            (action.payload.username == state.username
                &&
                action.payload.password == state.password)
                ?
                state.isLogin = true :
                (state.isLogin = false || alert('WRONG CREDS '));
        },
        logmeout: (state,action) => {
            state.isLogin = false;
        }

    }
})

export const { addPost, login,logmeout } = postsSlice.actions;
export default postsSlice.reducer;









