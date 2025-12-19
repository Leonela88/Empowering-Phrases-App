import { useCallback } from "react";

export default function useUpdatePhrase(setPhrases, index) {
const updatePhrase = useCallback(
    (updatedFields) => {
    setPhrases(prev =>
        prev.map((item, i) =>
        i === index ? { ...item, ...updatedFields } : item
        )
    );
    },
    [setPhrases, index]
);

return updatePhrase;
}