import { Router } from 'express';
// SERVICES
import { healthCheck } from '@/controllers/health';

const router: Router = Router();

router.get('/', healthCheck);

export default router;
