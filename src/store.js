import { configureStore } from '@reduxjs/toolkit'
import videoPlayerReducer from './features/VideoPlayer/videoPlayerSlice'

export default configureStore({
    reducer: {
        player: videoPlayerReducer
    },
  })