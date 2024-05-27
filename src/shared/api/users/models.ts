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