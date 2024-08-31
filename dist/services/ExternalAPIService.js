"use strict";
// src/services/ExternalAPIService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAPIService = void 0;
class ExternalAPIService {
    constructor(apiAdapter) {
        this.apiAdapter = apiAdapter;
    }
    async fetchExternalData(endpoint) {
        return this.apiAdapter.getData(endpoint);
    }
    async sendExternalData(endpoint, data) {
        return this.apiAdapter.postData(endpoint, data);
    }
}
exports.ExternalAPIService = ExternalAPIService;
