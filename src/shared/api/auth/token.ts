import {TokenResponse} from "./models";
import {api} from "../base";

const BASE_URL = "/api/auth/token";

export type LoginRequest = {
    email: string;
    password: string;
}


export const login = (params: LoginRequest): Promise<TokenResponse> => {
    return api.post(`${BASE_URL}/login/`, params);
}

export const logout = (): Promise<TokenResponse> => {
    const token = localStorage.getItem('token')
    return api.post(`${BASE_URL}/logout/`, null, {
        headers: api.tokenHeader(token)
    });
}