import { Router } from 'express';
import { LoggerAdapter } from './adapters/LoggerAdapter';
import { KafkaAdapter } from './adapters/KafkaAdapter';
import { SQSAdapter } from './adapters/SQSAdapter';
import { LogService } from './services/LogService';
import { MessageQueueService } from './services/MessageQueueService';
import { LogHandler } from './handlers/LogHandler';
import { KafkaHandler } from './handlers/KafkaHandler';
import { SQSHandler } from './handlers/SQSHandler';
import { ExternalAPIHandler } from './handlers/ExternalAPIHandler';
import { ExternalAPIAdapter } from './adapters/ExternalAPIAdapter';
import { ExternalAPIService } from './services/ExternalAPIService';

const router = Router();

// Instância dos adaptadores
const loggerAdapter = new LoggerAdapter();
const kafkaAdapter = new KafkaAdapter();
const sqsAdapter = new SQSAdapter();

// Instância dos serviços
const logService = new LogService(loggerAdapter);
const messageQueueService = new MessageQueueService(kafkaAdapter, sqsAdapter);

// Instância dos handlers
const logHandler = new LogHandler(logService);
const kafkaHandler = new KafkaHandler(messageQueueService);
const sqsHandler = new SQSHandler(messageQueueService);

// Instancia do External Apis
const externalAPIAdapter = new ExternalAPIAdapter('https://api.exemplo.com'); // Base URL da API externa
const externalAPIService = new ExternalAPIService(externalAPIAdapter);
const externalAPIHandler = new ExternalAPIHandler(externalAPIService);

// Rotas de logs
router.post('/log/info', (req, res) => logHandler.logInfo(req, res));
router.post('/log/error', (req, res) => logHandler.logError(req, res));

// Rotas de Kafka
router.post('/kafka/send', (req, res) => kafkaHandler.sendMessage(req, res));
router.get('/kafka/receive', (req, res) => kafkaHandler.receiveMessage(req, res));

// Rotas de SQS
router.post('/sqs/send', (req, res) => sqsHandler.sendMessage(req, res));
router.get('/sqs/receive', (req, res) => sqsHandler.receiveMessage(req, res));

// Rotas de External Api
router.get('/external/get/:endpoint', (req, res) => externalAPIHandler.fetchExternalData(req, res));
router.post('/external/post/:endpoint', (req, res) => externalAPIHandler.sendExternalData(req, res));


export default router;
