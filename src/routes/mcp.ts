import { Router } from 'express';
import { handleStreamableHttp } from '@/controllers/mcp';

const router: Router = Router();

router.post('/', handleStreamableHttp);

export default router;
