import { env } from "@env";
import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = { baseURL: env.NEXT_PUBLIC_SERVER_URL };
export const axiosClient = axios.create(config);
