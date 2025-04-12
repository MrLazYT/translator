import { configureStore } from "@reduxjs/toolkit";
import { languageSelectorSlice } from "./slices/languageSelectorSlice";

export const store = configureStore({
    reducer: {
        languageSelector: languageSelectorSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
