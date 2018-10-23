import * as mongoose from 'mongoose'

const stageSchema = new mongoose.Schema({
    title:{
        maxlength:15,
        required:true,
        type: String
    },
    creation_date:{
        default: new Date(),
        type: Date
    },
    order: {
        required:true,
        type: Number
    },
    status: {
        default: "A",
        type: String
    },
    project_id: {
        type: String,
        required:true
    },
    sprint:[{
        _id: {
            required:true,
            type:String
        },
        status:{
            default: "A",
            type: String
        },
        allocation_date : {
            default: new Date(),
            type: Date
        }
    }],
    priority_level:{
        type:Number
    },
    automatically_concludes_task:{
        default:false,
        type: Boolean
    }
});

export const Stage = mongoose.model('Stage', stageSchema);