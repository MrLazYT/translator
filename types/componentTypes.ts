import { ImageSourcePropType } from "react-native";

export type SourceTextInputProps = {
    sourceText: string;
    onChangeText: (text: string) => void;
};

export type TargetTextOutputProps = {
    targetText: string;
};

export type CustomImageButtonProps = {
    testID?: string;
    source?: ImageSourcePropType;
    onPress: () => void;
};

export type LanguageSelectorProps = {
    setSourceLangCode: (langCode: string) => void;
    setTargetLangCode: (langCode: string) => void;
    sourceLangName: string;
    targetLangName: string;
    setSourceLangName: (lang: string) => void;
    setTargetLangName: (lang: string) => void;
};

export type LanguageLabelProps = {
    isSource: boolean;
};

export type TranslationCardProps = {
    id: number;
    sourceText: string;
    targetText: string;
    sourceLang?: string;
    targetLang?: string;
    onRemove: (id: number) => void;
};

export type MigrationErrorProps = {
    error: Error;
};

export type LanguageOptionProps = {
    isSource: boolean;
    langCode: string;
    langNameEn: string;
    langNameUk: string;
};

export type SelectLanguageModalProps = {
    isSource: boolean;
};
