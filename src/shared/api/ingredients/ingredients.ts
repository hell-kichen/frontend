import { api } from "../base";
import { Ingredient } from "./models";

const BASE_URL = "/api/ingredients";

export type GetIngredientsListParams = {
  name?: string;
};

export const getIngredients = (
  params: GetIngredientsListParams,
): Promise<Ingredient[]> => {
  return api.get(BASE_URL, { params });
};

export type GetIngredientByIDParams = {
  ingredientID: string;
  [x: string]: any;
};
export const getIngredientByID = ({
  ingredientID,
}: GetIngredientByIDParams): Promise<Ingredient> => {
  return api.get(`${BASE_URL}/${ingredientID}`);
};
