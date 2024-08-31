"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoggerAdapter_1 = require("./adapters/LoggerAdapter");
const KafkaAdapter_1 = require("./adapters/KafkaAdapter");
const SQSAdapter_1 = require("./adapters/SQSAdapter");
const LogService_1 = require("./services/LogService");
const MessageQueueService_1 = require("./services/MessageQueueService");
const LogHandler_1 = require("./handlers/LogHandler");
const KafkaHandler_1 = require("./handlers/KafkaHandler");
const SQSHandler_1 = require("./handlers/SQSHandler");
const router = (0, express_1.Router)();
// Instância dos adaptadores
const loggerAdapter = new LoggerAdapter_1.LoggerAdapter();
const kafkaAdapter = new KafkaAdapter_1.KafkaAdapter();
const sqsAdapter = new SQSAdapter_1.SQSAdapter();
// Instância dos serviços
const logService = new LogService_1.LogService(loggerAdapter);
const messageQueueService = new MessageQueueService_1.MessageQueueService(kafkaAdapter, sqsAdapter);
// Instância dos handlers
const logHandler = new LogHandler_1.LogHandler(logService);
const kafkaHandler = new KafkaHandler_1.KafkaHandler(messageQueueService);
const sqsHandler = new SQSHandler_1.SQSHandler(messageQueueService);
// Rotas de logs
router.post('/log/info', (req, res) => logHandler.logInfo(req, res));
router.post('/log/error', (req, res) => logHandler.logError(req, res));
// Rotas de Kafka
router.post('/kafka/send', (req, res) => kafkaHandler.sendMessage(req, res));
router.get('/kafka/receive', (req, res) => kafkaHandler.receiveMessage(req, res));
// Rotas de SQS
router.post('/sqs/send', (req, res) => sqsHandler.sendMessage(req, res));
router.get('/sqs/receive', (req, res) => sqsHandler.receiveMessage(req, res));
exports.default = router;
