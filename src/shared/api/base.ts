import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

class Api {
    private axios: AxiosInstance

    constructor(baseURL: string) {
        this.axios = axios.create({
            baseURL: baseURL,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async post<T>(endpoint: string, data: any, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axios.post(endpoint, data, options);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async put<T>(
        endpoint: string,
        data: any,
        options: AxiosRequestConfig = {}
    ): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axios.put(
                endpoint,
                data,
                options
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async delete<T>(
        endpoint: string,
        options: AxiosRequestConfig = {}
    ): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axios.delete(
                endpoint,
                options
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export const api = new Api("https://hellchicken.ru");