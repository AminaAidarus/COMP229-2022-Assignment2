// Index Routes 
import { Router } from 'express';
import { displayHomePage } from '../controllers/index.controller.server.js';
import { displayAboutPage } from '../controllers/index.controller.server.js';
import { displayContactsPage } from '../controllers/index.controller.server.js';
import { displayProjectsPage } from '../controllers/index.controller.server.js';
import { displayServicesPage } from '../controllers/index.controller.server.js';
const router = Router();

// add middleware to connect application
router.get('/home',displayHomePage);
router.get('/services',displayServicesPage);
router.get('/projects',displayProjectsPage);
router.get('/about',displayAboutPage);
router.get('/contact',displayContactsPage);


export default router;