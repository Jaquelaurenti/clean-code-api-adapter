export interface ILogger {
  logInfo(message: string): Promise<void>;
  logError(message: string): Promise<void>;
}
