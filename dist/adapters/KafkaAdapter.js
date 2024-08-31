"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaAdapter = void 0;
class KafkaAdapter {
    async sendMessage(message) {
        // Integração com o Kafka
        console.log(`Kafka Send: ${message}`);
    }
    async receiveMessage() {
        // Integração com o Kafka
        console.log('Kafka Receive');
        return 'Mensagem do Kafka';
    }
}
exports.KafkaAdapter = KafkaAdapter;
