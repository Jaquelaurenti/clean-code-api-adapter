import { IMessageQueue } from '../interfaces/IMessageQueue';

export class KafkaAdapter implements IMessageQueue {
  async sendMessage(message: string): Promise<void> {
    // Integração com o Kafka
    console.log(`Kafka Send: ${message}`);
  }

  async receiveMessage(): Promise<string> {
    // Integração com o Kafka
    console.log('Kafka Receive');
    return 'Mensagem do Kafka';
  }
}
