import app from '@/app';
// CONSTANTS
import { PORT } from '@/utils/constants';
// UTILS
import logger from '@/utils/logger';

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
