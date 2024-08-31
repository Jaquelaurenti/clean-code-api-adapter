// src/services/ExternalAPIService.ts

import { IExternalAPIService } from '../interfaces/IExternalAPIService';

export class ExternalAPIService {
    constructor(private apiAdapter: IExternalAPIService) {}

    async fetchExternalData(endpoint: string): Promise<any> {
        return this.apiAdapter.getData(endpoint);
    }

    async sendExternalData(endpoint: string, data: any): Promise<any> {
        return this.apiAdapter.postData(endpoint, data);
    }
}
