import {api} from "../base";
import {SignUp, User} from "./models";

const BASE_URL = "/api/users/";

export const signUp = (
    data: SignUp
): Promise<User> => {
    return api.post(BASE_URL, data)
        .then((response: unknown) => {
            const res = response as Response;
            if (!res.ok) {
                return res.json().then(err => Promise.reject(err));
            }
            return res.json() as Promise<User>;
        });
};