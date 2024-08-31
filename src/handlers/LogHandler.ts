import { Request, Response } from 'express';
import { LogService } from '../services/LogService';

export class LogHandler {
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  async logInfo(req: Request, res: Response): Promise<void> {
    const { message } = req.body;

    if (!message) {
      res.status(400).send('Message is required');
      return;
    }

    try {
      await this.logService.logInfo(message);
      res.status(200).send('Info log sent successfully');
    } catch (error) {
      res.status(500).send('Failed to send info log');
    }
  }

  async logError(req: Request, res: Response): Promise<void> {
    const { message } = req.body;

    if (!message) {
      res.status(400).send('Message is required');
      return;
    }

    try {
      await this.logService.logError(message);
      res.status(200).send('Error log sent successfully');
    } catch (error) {
      res.status(500).send('Failed to send error log');
    }
  }
}
