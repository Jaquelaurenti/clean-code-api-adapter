// src/adapters/ExternalAPIAdapter.ts

import axios, { AxiosInstance } from 'axios';
import { IExternalAPIService } from '../interfaces/IExternalAPIService';

export class ExternalAPIAdapter implements IExternalAPIService {
    private client: AxiosInstance;

    constructor(baseURL: string) {
        this.client = axios.create({ baseURL });
    }

    async getData(endpoint: string): Promise<any> {
        try {
            const response = await this.client.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch data from ${endpoint}: ${error}`);
        }
    }

    async postData(endpoint: string, data: any): Promise<any> {
        try {
            const response = await this.client.post(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to post data to ${endpoint}: ${error}`);
        }
    }
}
