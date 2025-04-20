import CircleImageButton from "./CircleImageButton";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSourceLangCode,
    selectSourceLangNameEn,
    selectSourceLangNameUk,
    selectTargetLangCode,
    selectTargetLangNameEn,
    selectTargetLangNameUk,
    setSourceLang,
    setTargetLang,
} from "../../app/slices/languageSelectorSlice";

export default function SwitchLangButton() {
    const dispatch = useDispatch();

    const sourceLangCode = useSelector(selectSourceLangCode);
    const sourceLangNameEn = useSelector(selectSourceLangNameEn);
    const sourceLangNameUk = useSelector(selectSourceLangNameUk);

    const targetLangCode = useSelector(selectTargetLangCode);
    const targetLangNameEn = useSelector(selectTargetLangNameEn);
    const targetLangNameUk = useSelector(selectTargetLangNameUk);

    const switchLangs = () => {
        if (sourceLangCode !== "auto") {
            dispatch(
                setSourceLang({ langCode: targetLangCode, langNameEn: targetLangNameEn, langNameUk: targetLangNameUk })
            );
            dispatch(
                setTargetLang({ langCode: sourceLangCode, langNameEn: sourceLangNameEn, langNameUk: sourceLangNameUk })
            );
        }
    };

    return <CircleImageButton source={require("../../assets/change-language-icon.png")} onPress={switchLangs} />;
}
