import {FollowUserResponse, SignupResponse} from "./models";
import {api} from "../base";
import {GetRecipesByIDParams} from "../recipes";

export type SignUpRequest = {
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
}

export type FollowUserParams = {
    userID: string;
}

export const signUp = (authData: SignUpRequest): Promise<SignupResponse> => {
    return api.post(`/api/users/`, authData)
}

export const getMe = (): Promise<SignupResponse> => {
    const token: string | null = localStorage.getItem('token')
    return api.get("/api/users/me/", {
        headers: api.tokenHeader(token),
    });
}


export const followUser = (
    {userID}: FollowUserParams
): Promise<FollowUserResponse> => {
    const token = localStorage.getItem('token')
    const authorization = token ? {'authorization': `Token ${token}`} : {}

    return api.post(`/api/users/${userID}/subscribe/`, null, {
        headers: {
            "Content-Type": "application/json",
            ...authorization,
        }
    })
}

export const unfollowUser = (
    {userID}: FollowUserParams
): Promise<null | { errors: string }> => {
    const token = localStorage.getItem('token')
    const authorization = token ? {'authorization': `Token ${token}`} : {}

    return api.delete(`/api/users/${userID}/subscribe/`, {
        headers: {
            "Content-Type": "application/json",
            ...authorization,
        }
    })
}