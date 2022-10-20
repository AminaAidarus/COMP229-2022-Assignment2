//index Routes
import { Router } from 'express';
import { DisplayContactsList, displayLoginPage } from '../controllers/secure.controller.server.js';

const router = Router();

//add middleware to connect application

router.get('/login', displayLoginPage);
router.get('/contact-list', DisplayContactsList);
export default router;
