"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogHandler = void 0;
class LogHandler {
    constructor(logService) {
        this.logService = logService;
    }
    async logInfo(req, res) {
        const { message } = req.body;
        if (!message) {
            res.status(400).send('Message is required');
            return;
        }
        try {
            await this.logService.logInfo(message);
            res.status(200).send('Info log sent successfully');
        }
        catch (error) {
            res.status(500).send('Failed to send info log');
        }
    }
    async logError(req, res) {
        const { message } = req.body;
        if (!message) {
            res.status(400).send('Message is required');
            return;
        }
        try {
            await this.logService.logError(message);
            res.status(200).send('Error log sent successfully');
        }
        catch (error) {
            res.status(500).send('Failed to send error log');
        }
    }
}
exports.LogHandler = LogHandler;
