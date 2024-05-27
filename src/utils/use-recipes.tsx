import React, {useState} from "react";
import {recipesApi} from "../shared/api/index.js";
import {useTags} from "./use-tags";

export default function useRecipes() {
    const [recipes, setRecipes] = useState([])
    const [recipesCount, setRecipesCount] = useState(0)
    const [recipesPage, setRecipesPage] = useState(1)
    const {value: tagsValue, handleChange: handleTagsChange, setValue: setTagsValue} = useTags()

    const handleLike = ({id, toLike = true}: { id: string, toLike: boolean }) => {
        const method = toLike ? recipesApi.addToFavorites : recipesApi.removeFromFavorites
        method({recipeID: id}).then(res => {
            const recipesUpdated = recipes.map(recipe => {
                // @ts-ignore
                if (recipe.id === id) {
                    // @ts-ignore
                    recipe.is_favorited = toLike
                }
                return recipe
            })
            setRecipes(recipesUpdated)
        })
            .catch(err => {
                const {errors} = err
                if (errors) {
                    alert(errors)
                }
            })
    }

    const handleAddToCart = ({id, toAdd = true, callback}: { id: string, toAdd: boolean, callback: any }) => {
        const method = toAdd ? recipesApi.addToCart : recipesApi.removeFromCart
        method({recipeID: id}).then(() => {
            const recipesUpdated = recipes.map(recipe => {
                // @ts-ignore
                if (recipe.id === id) {
                    // @ts-ignore
                    recipe.is_in_shopping_cart = toAdd
                }
                return recipe
            })
            setRecipes(recipesUpdated)
            callback && callback(toAdd)
        })
            .catch(err => {
                const {errors} = err
                if (errors) {
                    alert(errors)
                }
            })
    }

    return {
        recipes,
        setRecipes,
        recipesCount,
        setRecipesCount,
        recipesPage,
        setRecipesPage,
        tagsValue,
        handleLike,
        handleAddToCart,
        handleTagsChange,
        setTagsValue
    }
}
