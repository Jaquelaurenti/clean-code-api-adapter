"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
class LogService {
    constructor(logger) {
        this.logger = logger;
    }
    async logInfo(message) {
        try {
            await this.logger.logInfo(message);
            console.log('Log de informação enviado com sucesso.');
        }
        catch (error) {
            console.error('Erro ao enviar log de informação:', error);
        }
    }
    async logError(message) {
        try {
            await this.logger.logError(message);
            console.log('Log de erro enviado com sucesso.');
        }
        catch (error) {
            console.error('Erro ao enviar log de erro:', error);
        }
    }
}
exports.LogService = LogService;
