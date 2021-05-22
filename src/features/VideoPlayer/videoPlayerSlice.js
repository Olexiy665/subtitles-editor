import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */ 
export const videoPlayerSlice = createSlice({
    name: 'player',
    initialState: {
        videoDuration: 0,
        currentTime: 0,
    },
    reducers: {
        updateDuration: (state, action) => {
         state.videoDuration  =  action.payload
        }
    }
})

export const { updateDuration } =  videoPlayerSlice.actions

export default videoPlayerSlice.reducer