import { env } from "@env";
import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = { baseURL: env.SERVER_URL };
export const axiosClient = axios.create(config);
