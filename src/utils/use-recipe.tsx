import {useState} from "react";

export default function useRecipe() {
    const [recipe, setRecipe] = useState({})
    return {
        recipe,
        setRecipe,
    }
}