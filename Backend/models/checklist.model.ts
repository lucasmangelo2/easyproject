
import * as mongoose from 'mongoose'

const CheckListSchema = new mongoose.Schema({
    task_id:{
        type:String
    },
    description: {
        required:true,
        type:String
    },
    creation_date:{
        type:Date,
        default:new Date()
    },
    complete_date:{
        type:Date
    },
    complete:{
        default:false,
        type: Boolean
    }
});

export const CheckList = mongoose.model('CheckList', CheckListSchema);
