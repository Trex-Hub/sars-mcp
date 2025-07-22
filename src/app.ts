import express, { Express} from 'express';
// ROUTES
import healthRoutes from '@/routes/health';
import mcpRoutes from '@/routes/mcp';
// UTILS
import logger from '@/utils/logger';

const app: Express = express();

// MIDDLEWARES
app.use(express.json());

// LOGGER
app.use((req,_, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// ROUTES ADDED
app.use('/health', healthRoutes);
app.use('/mcp', mcpRoutes);
export default app;
