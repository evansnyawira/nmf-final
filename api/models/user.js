import{ Schema, connection } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

userSchema.set('timestamps', true);

const User = connection.model('User', userSchema);

export default User;