"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
(0, swagger_1.setupSwagger)(app); // Integrar Swagger
app.use('/api', routes_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`API documentation available at http://localhost:${port}/api-docs`);
});
