import { IMessageQueue } from '../interfaces/IMessageQueue';

export class MessageQueueService {
  private kafka: IMessageQueue;
  private sqs: IMessageQueue;

  constructor(kafka: IMessageQueue, sqs: IMessageQueue) {
    this.kafka = kafka;
    this.sqs = sqs;
  }

  async sendMessageToKafka(message: string): Promise<void> {
    try {
      await this.kafka.sendMessage(message);
      console.log('Mensagem enviada para o Kafka com sucesso.');
    } catch (error) {
      console.error('Erro ao enviar mensagem para o Kafka:', error);
    }
  }

  async receiveMessageFromKafka(): Promise<string | null> {
    try {
      const message = await this.kafka.receiveMessage();
      console.log('Mensagem recebida do Kafka:', message);
      return message;
    } catch (error) {
      console.error('Erro ao receber mensagem do Kafka:', error);
      return null;
    }
  }

  async sendMessageToSQS(message: string): Promise<void> {
    try {
      await this.sqs.sendMessage(message);
      console.log('Mensagem enviada para o SQS com sucesso.');
    } catch (error) {
      console.error('Erro ao enviar mensagem para o SQS:', error);
    }
  }

  async receiveMessageFromSQS(): Promise<string | null> {
    try {
      const message = await this.sqs.receiveMessage();
      console.log('Mensagem recebida do SQS:', message);
      return message;
    } catch (error) {
      console.error('Erro ao receber mensagem do SQS:', error);
      return null;
    }
  }
}
