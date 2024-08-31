import { ILogger } from '../interfaces/ILogger';

export class LogService {
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  async logInfo(message: string): Promise<void> {
    try {
      await this.logger.logInfo(message);
      console.log('Log de informação enviado com sucesso.');
    } catch (error) {
      console.error('Erro ao enviar log de informação:', error);
    }
  }

  async logError(message: string): Promise<void> {
    try {
      await this.logger.logError(message);
      console.log('Log de erro enviado com sucesso.');
    } catch (error) {
      console.error('Erro ao enviar log de erro:', error);
    }
  }
}
