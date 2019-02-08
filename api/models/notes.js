import { Schema, connection } from 'mongoose';


const noteSchema = new Schema({
    title: {
        type: String,
    },
    comment: {
        type: String,
    }
})

noteSchema.set('timestamps', true);

const Note = connection.model('Note', noteSchema);

export default Note;