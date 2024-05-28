export interface SignupResponse {
    id: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
}

export interface UserDTO {
    id: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    is_subscribed: boolean;
}

export interface RecipeInFollowResponse {
    id: number,
    name: string,
    image: string,
    cooking_time: number
}

export interface FollowUserResponse {
    id: string,
    email: string,
    username: string,
    first_name: string,
    last_name: string,
    is_subscribed: true,
    recipes_count: number
    recipes: RecipeInFollowResponse[],
}