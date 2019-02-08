import { Schema, connection } from 'mongoose';

const patientSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthday: {
        type: String
    },

})

patientSchema.set('timestamps', true);

const Patient = connection.model('Patient', patientSchema);

export default Patient;