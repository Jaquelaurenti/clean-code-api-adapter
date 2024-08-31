"use strict";
// src/handlers/ExternalAPIHandler.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAPIHandler = void 0;
class ExternalAPIHandler {
    constructor(externalAPIService) {
        this.externalAPIService = externalAPIService;
    }
    async fetchExternalData(req, res) {
        const { endpoint } = req.params;
        try {
            const data = await this.externalAPIService.fetchExternalData(endpoint);
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async sendExternalData(req, res) {
        const { endpoint } = req.params;
        const { body } = req;
        try {
            const data = await this.externalAPIService.sendExternalData(endpoint, body);
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
}
exports.ExternalAPIHandler = ExternalAPIHandler;
