import {SignupResponse} from "./models";
import {api} from "../base";

export type SignUpRequest = {
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
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