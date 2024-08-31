import { ILogger } from '../interfaces/ILogger';

export class LoggerAdapter implements ILogger {
  async logInfo(message: string): Promise<void> {
    // Integração com o OpenSearch
    console.log(`Log Info: ${message}`);
  }

  async logError(message: string): Promise<void> {
    // Integração com o OpenSearch
    console.error(`Log Error: ${message}`);
  }
}
