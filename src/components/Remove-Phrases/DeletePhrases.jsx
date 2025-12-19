import { phrases as initialPhrases } from "../../array/Array.jsx";
import { useCallback } from "react";

export default function useDeletePhrase(setPhrases, index, setIndex) {
return useCallback(() => {
    setPhrases(prev => {
    if (prev.length === 0) return prev;

    const updated = prev.filter((_, i) => i !== index);

    if (index >= updated.length) {
        setIndex(Math.max(updated.length - 1, 0));
    }

    alert ("This phrase has now been deleted") 

    return updated;

    });
}, [setPhrases, index, setIndex]);
}