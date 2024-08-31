import { Request, Response } from 'express';
import { MessageQueueService } from '../services/MessageQueueService';

export class KafkaHandler {
  private messageQueueService: MessageQueueService;

  constructor(messageQueueService: MessageQueueService) {
    this.messageQueueService = messageQueueService;
  }

  async sendMessage(req: Request, res: Response): Promise<void> {
    const { message } = req.body;

    if (!message) {
      res.status(400).send('Message is required');
      return;
    }

    try {
      await this.messageQueueService.sendMessageToKafka(message);
      res.status(200).send('Message sent to Kafka successfully');
    } catch (error) {
      res.status(500).send('Failed to send message to Kafka');
    }
  }

  async receiveMessage(req: Request, res: Response): Promise<void> {
    try {
      const message = await this.messageQueueService.receiveMessageFromKafka();
      res.status(200).send(`Received message from Kafka: ${message}`);
    } catch (error) {
      res.status(500).send('Failed to receive message from Kafka');
    }
  }
}
