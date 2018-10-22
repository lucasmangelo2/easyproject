import * as mongoose from 'mongoose'

const stageSchema = new mongoose.Schema({
    title:{
        required:true,
        type: String
    },
    description:{
        type: String
    },
    creation_date:{
        type: Date
    },
    order: {
        type: Number
    },
    status: {
        type: String
    },
    sprint:[{
        id: String,
        status:String,
        allocation_date : Date
    }],
    priority_level:{
        type:Number
    },
    automatically_concludes_task:{
        type: Boolean
    }
});

export const Stage = mongoose.model('Stage', stageSchema);