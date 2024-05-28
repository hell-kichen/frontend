import {useState} from "react";

interface Tag {
    id: string;
    value: boolean;
    name: string;
}

interface UseTagsReturn {
    value: Tag[];
    handleChangeTags: (id: string) => void;
    setValue: React.Dispatch<React.SetStateAction<Tag[]>>;
}

export default function useTags(): UseTagsReturn {
    const [value, setValue] = useState<Tag[]>([]);

    const handleChangeTags = (id: string): void => {
        const valueUpdated = value.map(item => {
            if (item.id === id) {
                item.value = !item.value;
            }
            return item;
        });
        setValue(valueUpdated);
    };

    return {value, handleChangeTags, setValue};
}