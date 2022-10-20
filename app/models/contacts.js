import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    //schema definition properties
    name: String, 
    phone: Number, 
    email: String
}, {
    //schema options
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactSchema);