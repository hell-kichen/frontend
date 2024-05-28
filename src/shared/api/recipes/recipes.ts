import {api} from "../base";
import {Recipes} from "./models";

const BASE_URL = "/api/recipes";

export type GetRecipesListParams = {}

export const getRecipes = (
    params: GetRecipesListParams
): Promise<{ results: Recipes[] }> => {
    return api.get(BASE_URL, {params})
}

export type GetRecipesByIDParams = {
    recipeID: string;
}
export const getRecipeByID = (
    {recipeID}: GetRecipesByIDParams,
): Promise<Recipes> => {
    return api.get(`${BASE_URL}/${recipeID}`)
}


