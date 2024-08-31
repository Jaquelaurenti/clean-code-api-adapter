"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQSHandler = void 0;
class SQSHandler {
    constructor(messageQueueService) {
        this.messageQueueService = messageQueueService;
    }
    async sendMessage(req, res) {
        const { message } = req.body;
        if (!message) {
            res.status(400).send('Message is required');
            return;
        }
        try {
            await this.messageQueueService.sendMessageToSQS(message);
            res.status(200).send('Message sent to SQS successfully');
        }
        catch (error) {
            res.status(500).send('Failed to send message to SQS');
        }
    }
    async receiveMessage(req, res) {
        try {
            const message = await this.messageQueueService.receiveMessageFromSQS();
            res.status(200).send(`Received message from SQS: ${message}`);
        }
        catch (error) {
            res.status(500).send('Failed to receive message from SQS');
        }
    }
}
exports.SQSHandler = SQSHandler;
