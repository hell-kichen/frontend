import {useState} from "react";
import internal from "node:stream";
import {recipesApi, usersApi} from "../shared/api";
import {api} from "../shared/api/base";
import any = jasmine.any;

export default function useRecipe() {
    const [recipe, setRecipe] = useState({
        author: undefined,
        image: undefined,
        tags: undefined,
        cooking_time: undefined,
        name: undefined,
        ingredients: undefined,
        text: undefined,
        is_favorited: undefined,
        is_in_shopping_cart: undefined,
    })

    const handleLike = ({id, toLike = 1}: { id: string, toLike: number }) => {
        const method = toLike ? recipesApi.addToFavorites : recipesApi.removeFromFavorites
        method({recipeID: id}).then(res => {
            const recipeUpdated = {...recipe, is_favorited: Number(toLike)}
            // @ts-ignore
            setRecipe(recipeUpdated)
        })
            .catch(err => {
                const {errors} = err
                if (errors) {
                    alert(errors)
                }
            })
    }

    const handleAddToCart = ({id, toAdd = 1, callback}: { id: string, toAdd: number, callback: any }) => {
        const method = toAdd ? recipesApi.addToCart : recipesApi.removeFromCart
        method({recipeID: id}).then(res => {
            const recipeUpdated = {...recipe, is_in_shopping_cart: Number(toAdd)}
            // @ts-ignore
            setRecipe(recipeUpdated)
            callback && callback(toAdd)
        })
            .catch(err => {
                const {errors} = err
                if (errors) {
                    alert(errors)
                }
            })
    }

    const handleSubscribe = ({author_id, toSubscribe = 1}: { author_id: string, toSubscribe: number }) => {
        const method = toSubscribe ? usersApi.followUser : usersApi.unfollowUser
        method({
            userID: author_id
        })
            .then(_ => {
                const recipeUpdated = {...recipe, author: {is_subscribed: toSubscribe}}
                // @ts-ignore
                setRecipe(recipeUpdated)
            })
            .catch(err => {
                const {errors} = err
                if (errors) {
                    alert(errors)
                }
            })
    }

    return {
        recipe,
        setRecipe,
        handleLike,
        handleAddToCart,
        handleSubscribe
    }
}
