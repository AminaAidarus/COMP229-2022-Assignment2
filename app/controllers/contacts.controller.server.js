// Contacts controller 
import contactsModel from '../models/contacts.js';
import { UserDisplayName } from '../utils/index.js';

export function DisplayContactsList(req, res, next){
    contactsModel.find({}, null, {sort: {name: 1}}, (err, contactsCollection) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        else {
        res.render('index', {title: 'Contacts List', page: 'contacts/list', contacts: contactsCollection, displayName: UserDisplayName(req)});
        }
    })

}

export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: 'Add Contact', page: 'contacts/add', contacts: {}, displayName: UserDisplayName(req)});
}

export function ProcessContactsAddPage(req, res, next){
    
    let newContact = contactsModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    contactsModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )

}

export function DisplayContactsEditPage(req, res, next){
    let id = req.params.id;

    contactsModel.findById(id, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

       res.render('index', { title: 'Edit Contact', page: 'contacts/edit', contacts: Contact, displayName: UserDisplayName(req) });
    });    

}

export function ProcessContactsEditPage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactsModel({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    contactsModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactsModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}