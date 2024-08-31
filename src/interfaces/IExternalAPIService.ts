// src/interfaces/IExternalAPIService.ts

export interface IExternalAPIService {
  getData(endpoint: string): Promise<any>;
  postData(endpoint: string, data: any): Promise<any>;
}
