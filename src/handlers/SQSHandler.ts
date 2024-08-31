import { Request, Response } from 'express';
import { MessageQueueService } from '../services/MessageQueueService';

export class SQSHandler {
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
      await this.messageQueueService.sendMessageToSQS(message);
      res.status(200).send('Message sent to SQS successfully');
    } catch (error) {
      res.status(500).send('Failed to send message to SQS');
    }
  }

  async receiveMessage(req: Request, res: Response): Promise<void> {
    try {
      const message = await this.messageQueueService.receiveMessageFromSQS();
      res.status(200).send(`Received message from SQS: ${message}`);
    } catch (error) {
      res.status(500).send('Failed to receive message from SQS');
    }
  }
}
