import { useEffect } from "react";
import { updateTranslation } from "../services/api/translator";

export default function useUpdateTranslation(
    sourceText: string,
    sourceLangCode: string,
    targetLangCode: string,
    setTranslatedText: (value: string) => void,
    typingTimeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>
) {
    useEffect(() => {
        (async () => {
            await updateTranslation(sourceText, sourceLangCode, targetLangCode, setTranslatedText, typingTimeoutRef);
        })();
    }, [targetLangCode]);
}
