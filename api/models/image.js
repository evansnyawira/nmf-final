import { Schema, connection } from 'mongoose';

const imageSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    fileName: {
        type: String
    }
})

imageSchema.set('timestamps', true)

const Image = connection.model('Image', imageSchema);

export default Image;