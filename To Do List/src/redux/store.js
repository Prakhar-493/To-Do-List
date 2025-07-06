import { configureStore } from '@reduxjs/toolkit'
import detailsreducer from './Slice.js'

export const Store = configureStore({
        reducer: {
                details: detailsreducer,
        },
})