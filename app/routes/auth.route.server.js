//index Routes
import { Router } from 'express';

import { DisplayLoginPage, ProcessLoginPage, ProcessLogoutPage} from '../controllers/auth.controller.server.js';

const router = Router();

router.get('/login', DisplayLoginPage);
router.post('/login', ProcessLoginPage);
router.get('/logout',ProcessLogoutPage);
export default router;