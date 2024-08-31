"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQSAdapter = void 0;
class SQSAdapter {
    async sendMessage(message) {
        // Integração com o SQS
        console.log(`SQS Send: ${message}`);
    }
    async receiveMessage() {
        // Integração com o SQS
        console.log('SQS Receive');
        return 'Mensagem do SQS';
    }
}
exports.SQSAdapter = SQSAdapter;
