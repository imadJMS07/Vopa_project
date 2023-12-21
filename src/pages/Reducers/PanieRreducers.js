import { createSlice } from '@reduxjs/toolkit'
const initialState = { name: 'ABC', Likes: 0 }


export const PostReducer = createSlice({
    name: 'post',
    initialState,
    reducers: {
        // Action1
        Like: (state) => {
            state.Likes += 1
        },

        // Action2
        DesLike: (state) => {
            state.Likes -= 1
        },


        changeName: (state, action) => {
            state.name = action.payload
        },

    }
})

export const { Like, DesLike, changeName } = PostReducer.actions
export default PostReducer.reducer


