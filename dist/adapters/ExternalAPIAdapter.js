"use strict";
// src/adapters/ExternalAPIAdapter.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAPIAdapter = void 0;
const axios_1 = __importDefault(require("axios"));
class ExternalAPIAdapter {
    constructor(baseURL) {
        this.client = axios_1.default.create({ baseURL });
    }
    async getData(endpoint) {
        try {
            const response = await this.client.get(endpoint);
            return response.data;
        }
        catch (error) {
            throw new Error(`Failed to fetch data from ${endpoint}: ${error}`);
        }
    }
    async postData(endpoint, data) {
        try {
            const response = await this.client.post(endpoint, data);
            return response.data;
        }
        catch (error) {
            throw new Error(`Failed to post data to ${endpoint}: ${error}`);
        }
    }
}
exports.ExternalAPIAdapter = ExternalAPIAdapter;
