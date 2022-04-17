// import mongoose from 'mongoose';
// import {ContactSchema} from '../models/model'
//
// const Contact = mongoose.model('Contact', ContactSchema);
const fs = require("fs");


const filePathToContacts = "/contacts.json";

const addNewContact = (req, res) => {

    // let newContact = new Contact(req.body)
    // newContact.save((err, contact) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(contact)
    // })

}

const getContacts = (req, res) => {
    const content = fs.readFileSync(__dirname + filePathToContacts, "utf8");
    const contacts = JSON.parse(content);
    res.send(contacts);
    // Contact.find({}, (err, contact) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(contact)
    // })
}
const getContactWithID = (req, res) => {
    // Contact.findById(req.params.contactID, (err, contact) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(contact)
    // })
}

const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactID},
        req.body, {new: true, useFindAndModify: false},
        (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact)
        })
}
const deleteContact = (req, res) => {
    const content = fs.readFileSync(__dirname + filePathToContacts, "utf8");
    const contacts = JSON.parse(content);
    contacts.filter((item) => item.id !== req.query.id)
    res.send('contact has been deleted');
    data = JSON.stringify(users);
    fs.writeFileSync("users.json", data);
    Contact.remove({_id: req.params.contactID}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({message:'successfuly deleted contact'})
    })
}

module.exports = {
    addNewContact,
    getContacts,
    getContactWithID,
    deleteContact,
    updateContact
}



