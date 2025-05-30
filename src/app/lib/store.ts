import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { clientApi } from 'entities/client'
import { faqApi } from 'entities/faq'
import { propertyApi } from 'entities/property'
import { reviewApi } from 'entities/review'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        [propertyApi.reducerPath]: propertyApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer,
        [faqApi.reducerPath]: faqApi.reducer,
        [clientApi.reducerPath]: clientApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            propertyApi.middleware,
            reviewApi.middleware,
            faqApi.middleware,
            clientApi.middleware
        ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
