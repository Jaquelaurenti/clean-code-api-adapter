import { IMessageQueue } from '../interfaces/IMessageQueue';

export class SQSAdapter implements IMessageQueue {
  async sendMessage(message: string): Promise<void> {
    // Integração com o SQS
    console.log(`SQS Send: ${message}`);
  }

  async receiveMessage(): Promise<string> {
    // Integração com o SQS
    console.log('SQS Receive');
    return 'Mensagem do SQS';
  }
}
