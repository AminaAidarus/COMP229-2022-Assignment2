//index Routes
import { Router } from 'express';

import { DisplayLoginPage} from '../controllers/auth.controller.server.js';

const router = Router();

router.get('/login', DisplayLoginPage);

export default router;