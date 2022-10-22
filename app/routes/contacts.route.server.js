//index Routes
import { Router } from 'express';

import { DisplayContactsAddPage, 
    DisplayContactsList, 
    ProcessContactsAddPage,
    DisplayContactsEditPage,
    ProcessContactsEditPage,
    ProcessContactsDelete } from '../controllers/contacts.controller.server.js';

import { AuthGuard } from '../utils/index.js';

const router = Router();

//add middleware to connect application

router.get('/contact-list', AuthGuard, DisplayContactsList);
router.get('/contact-add', AuthGuard, DisplayContactsAddPage);
router.post('/contact-add',AuthGuard, ProcessContactsAddPage);
router.get('/contact-edit/:id',AuthGuard, DisplayContactsEditPage);
router.post('/contact-edit/:id',AuthGuard, ProcessContactsEditPage);
router.get('/contact-delete/:id',AuthGuard, ProcessContactsDelete);

export default router;
