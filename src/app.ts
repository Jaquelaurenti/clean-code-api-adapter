import express from 'express';
import routes from './routes';
import { setupSwagger } from './swagger';

const app = express();
const port = 3000;

app.use(express.json());
setupSwagger(app); // Integrar Swagger
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API documentation available at http://localhost:${port}/api-docs`);
});
