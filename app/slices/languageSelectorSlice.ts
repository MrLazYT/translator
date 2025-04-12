import { createSlice } from "@reduxjs/toolkit";

interface SelectedLanguageState {
    sourceLangCode: string;
    sourceLangNameEn: string;
    sourceLangNameUk: string;
    targetLangCode: string;
    targetLangNameEn: string;
    targetLangNameUk: string;
}

const initialState: SelectedLanguageState = {
    sourceLangCode: "auto",
    sourceLangNameEn: "Auto Detect",
    sourceLangNameUk: "Визначити автоматично",
    targetLangCode: "uk",
    targetLangNameEn: "Ukrainian",
    targetLangNameUk: "Українська",
};

export const languageSelectorSlice = createSlice({
    name: "languageSelector",
    initialState,
    reducers: {
        setSourceLang: (state, action) => {
            state.sourceLangCode = action.payload.langCode;
            state.sourceLangNameEn = action.payload.langNameEn;
            state.sourceLangNameUk = action.payload.langNameUk;
        },

        setTargetLang: (state, action) => {
            state.targetLangCode = action.payload.langCode;
            state.targetLangNameEn = action.payload.langNameEn;
            state.targetLangNameUk = action.payload.langNameUk;
        },
    },
    selectors: {
        selectSourceLangCode: (x) => x.sourceLangCode,
        selectSourceLangNameEn: (x) => x.sourceLangNameEn,
        selectSourceLangNameUk: (x) => x.sourceLangNameUk,
        selectTargetLangCode: (x) => x.targetLangCode,
        selectTargetLangNameEn: (x) => x.targetLangNameEn,
        selectTargetLangNameUk: (x) => x.targetLangNameUk,
    },
});

export const { setSourceLang, setTargetLang } = languageSelectorSlice.actions;
export const {
    selectSourceLangCode,
    selectSourceLangNameEn,
    selectSourceLangNameUk,
    selectTargetLangCode,
    selectTargetLangNameEn,
    selectTargetLangNameUk,
} = languageSelectorSlice.selectors;

export default languageSelectorSlice.reducer;
