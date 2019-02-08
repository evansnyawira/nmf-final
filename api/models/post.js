import { Schema, connection } from 'mongoose';

const postSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    }
})

postSchema.set('timestamps', true);

const Post = connection.model('Post', postSchema);

export default Post;