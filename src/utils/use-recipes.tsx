import {useState} from "react";

export default function useRecipes() {
    const [recipes, setRecipes] = useState([]);

    return {
        recipes,
        setRecipes,
    };
}