"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageQueueService = void 0;
class MessageQueueService {
    constructor(kafka, sqs) {
        this.kafka = kafka;
        this.sqs = sqs;
    }
    async sendMessageToKafka(message) {
        try {
            await this.kafka.sendMessage(message);
            console.log('Mensagem enviada para o Kafka com sucesso.');
        }
        catch (error) {
            console.error('Erro ao enviar mensagem para o Kafka:', error);
        }
    }
    async receiveMessageFromKafka() {
        try {
            const message = await this.kafka.receiveMessage();
            console.log('Mensagem recebida do Kafka:', message);
            return message;
        }
        catch (error) {
            console.error('Erro ao receber mensagem do Kafka:', error);
            return null;
        }
    }
    async sendMessageToSQS(message) {
        try {
            await this.sqs.sendMessage(message);
            console.log('Mensagem enviada para o SQS com sucesso.');
        }
        catch (error) {
            console.error('Erro ao enviar mensagem para o SQS:', error);
        }
    }
    async receiveMessageFromSQS() {
        try {
            const message = await this.sqs.receiveMessage();
            console.log('Mensagem recebida do SQS:', message);
            return message;
        }
        catch (error) {
            console.error('Erro ao receber mensagem do SQS:', error);
            return null;
        }
    }
}
exports.MessageQueueService = MessageQueueService;
