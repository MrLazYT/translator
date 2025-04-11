import axios from "axios";

export default async function translate({ text, source = "auto", target = "uk" }: tranlsateProps) {
    const api = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(
        text
    )}`;

    try {
        const response = await axios.get(api);
        const translatedArray = response.data[0];
        let result = "";

        for (let i = 0; i < translatedArray.length; i++) {
            result += translatedArray[i][0];
        }

        return result;
    } catch (error) {
        console.log("[Translation Error] Something went wrong!");
        return "";
    }
}
