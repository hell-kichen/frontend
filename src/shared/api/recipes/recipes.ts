import {api} from "../base";
import {Recipes} from "./models";
import {Tag} from "../tags/models";

const BASE_URL = "/api/recipes";

export type GetRecipesListParams = {
    page?: number;
    limit?: number;
    is_favorited?: number;
    is_in_shopping_cart?: number;
    author?: string;
    tags?: Tag[];
}

export const getRecipes = (
    {
        page = 1,
        limit = 6,
        tags,
        author,
        is_favorited = 0,
        is_in_shopping_cart = 0,
    }: GetRecipesListParams = {}
): Promise<Recipes> => {
    const token = localStorage.getItem('token')
    const authorization = token ? {'authorization': `Token ${token}`} : {}
    const tagsString = tags ? tags.map(tag => `&tags=${tag.slug}`).join('') : ''
    return api.get(
        `${BASE_URL}/?page=${page}&limit=${limit}${author ? `&author=${author}` : ''}${is_favorited ? `&is_favorited=${is_favorited}` : ''}${is_in_shopping_cart ? `&is_in_shopping_cart=${is_in_shopping_cart}` : ''}${tagsString}`,
        {
            headers: {
                "Content-Type": "application/json",
                ...authorization,
            }
        }
    )
}

export type GetRecipesByIDParams = {
    recipeID: string;
}
export const getRecipeByID = (
    {recipeID}: GetRecipesByIDParams,
): Promise<Recipes> => {
    return api.get(`${BASE_URL}/${recipeID}`)
}


