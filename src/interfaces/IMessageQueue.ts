export interface IMessageQueue {
  sendMessage(message: string): Promise<void>;
  receiveMessage(): Promise<string>;
}
