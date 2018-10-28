
import * as mongoose from 'mongoose'

const AttachmentSchema = new mongoose.Schema({
    content: {
        required:true,
        type:String
    },
    type:{
        required:true,
        type: String
    },
    creation_date: {
        default: new Date(),
        type:Date
    }
});

export const Attachment = mongoose.model('Attachment', AttachmentSchema);
