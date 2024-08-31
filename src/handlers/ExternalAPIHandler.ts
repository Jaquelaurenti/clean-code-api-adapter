// src/handlers/ExternalAPIHandler.ts

import { Request, Response } from 'express';
import { ExternalAPIService } from '../services/ExternalAPIService';

export class ExternalAPIHandler {
    constructor(private externalAPIService: ExternalAPIService) {}

    async fetchExternalData(req: Request, res: Response): Promise<void> {
        const { endpoint } = req.params;
        try {
            const data = await this.externalAPIService.fetchExternalData(endpoint);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async sendExternalData(req: Request, res: Response): Promise<void> {
        const { endpoint } = req.params;
        const { body } = req;
        try {
            const data = await this.externalAPIService.sendExternalData(endpoint, body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
