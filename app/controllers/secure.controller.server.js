// Secure controller 
import contactsModel from '../models/contacts.js';

export function displayLoginPage(req, res, next){
    res.render('index',{title: 'Login', page: 'login'});
}

export function DisplayContactsList(req, res, next){
    contactsModel.find(function(err, contactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contacts List', page: 'contacts_list', contacts: contactsCollection});
    })
}

export function AddContact(req, res, next){
    
}