import axios, { type AxiosInstance } from "axios";

// Access the environment variable
const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
export class AppAxios {
    public static readonly instance: AxiosInstance = axios.create({
        baseURL: BASE_URL,
    });
    private static requestInterceptorId: number | null = null;
    private static responseInterceptorId: number | null = null;
    public static setup(token: string | null) {
        // Clear existing request and response interceptors if they exist to avoid duplicate interceptors and memory leaks
        // And to use the latest token from the user without any issues

        if (this.requestInterceptorId !== null) {
            AppAxios.instance.interceptors.request.eject(this.requestInterceptorId);
        }
        if (this.responseInterceptorId !== null) {
            AppAxios.instance.interceptors.response.eject(this.responseInterceptorId);
        }

        // Add a request interceptor
        this.requestInterceptorId = AppAxios.instance.interceptors.request.use(
            (config) => {
                if (!token) {
                    console.log("No token found, rejecting the request.");
                    // If there's no token, reject the request
                    return Promise.reject(new Error("No token found"));
                }

                if (token && config.headers) {
                    config.headers["Authorization"] = `Bearer ${token}`;
                }

                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        //Response interceptor
        this.responseInterceptorId = AppAxios.instance.interceptors.response.use(
            function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response;
            },
            function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    // if 400 Error
                    if (error.response.status === 400) {
                        console.error('400 Error:', error.response.data);
                        return;
                    }

                    // if 401 Error
                    if (error.response.status === 401) {
                        console.error('401 Error: Unauthorized access - invalid or expired token.');
                        return;
                    }

                    // if 403 Error - Forbidden
                    if (error.response.status === 403) {
                        console.error('403 Error: Forbidden - insufficient permissions.');
                        return;
                    }

                    // if 404 Error
                    if (error.response.status === 404) {
                        console.error('404 Error: Resource not found.');
                        return;
                    }

                    // if 500 Error
                    if (error.response.status === 500) {
                        console.error('500 Error: Internal server error.');
                        return;
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    // Network error, server down, CORS issues, etc.
                    console.error('Request error:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error("Request setup error:", error.message);
                }

                return Promise.reject(error);
            }
        );
    }
}
