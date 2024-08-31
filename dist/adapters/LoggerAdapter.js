"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerAdapter = void 0;
class LoggerAdapter {
    async logInfo(message) {
        // Integração com o OpenSearch
        console.log(`Log Info: ${message}`);
    }
    async logError(message) {
        // Integração com o OpenSearch
        console.error(`Log Error: ${message}`);
    }
}
exports.LoggerAdapter = LoggerAdapter;
