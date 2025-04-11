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

export type LanguageLabelProps = {
    onPress: () => void;
    isSource: boolean;
    label: string;
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
