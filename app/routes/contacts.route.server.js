//index Routes
import { Router } from 'express';
import { DisplayContactsAddPage, 
    DisplayContactsList, 
    ProcessContactsAddPage,
    DisplayContactsEditPage,
    ProcessContactsEditPage,
    ProcessContactsDelete } from '../controllers/contacts.controller.server.js';

const router = Router();

//add middleware to connect application

router.get('/contact-list', DisplayContactsList);
router.get('/contact-add',DisplayContactsAddPage);
router.post('/contact-add',ProcessContactsAddPage);
router.get('/contact-edit/:id',DisplayContactsEditPage);
router.post('/contact-edit/:id',ProcessContactsEditPage);
router.get('/contact-delete/:id',ProcessContactsDelete);

export default router;
