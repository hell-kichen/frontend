import {UserDTO} from "../users/models";
import {Tag} from "../tags/models";

export interface IngredientInRecipeDTO {
    id: number,
    name: string,
    measurement_unit: string,
    amount: number
}

export interface RecipeDTO {
    id: number,
    tags: Tag[],
    author: UserDTO,
    ingredients: IngredientInRecipeDTO[],
    is_favorited: boolean,
    is_in_shopping_cart: boolean,
    name: string,
    image: string,
    text: string,
    cooking_time: number
}

export interface Recipes {
    count: number,
    next: string,
    previous: string,
    results: RecipeDTO[]
}

export interface AddRecipeToCartResponse {
    id: number,
    name: string,
    image: string,
    cooking_time: number
}