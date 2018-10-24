import * as mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title:{
        required:true,
        maxlength:25,
        type: String
    },
    description:{
        type: String
    },
    status:{
        default:"A",
        type:String
    },
    creation_user_id: {
        type:String
    },
    creation_date:{
        default: new Date(),
        type: Date
    },
    start_date:{
        default: new Date(),
        type: Date
    },
    end_date: {
        type: Date
    },
    checklist: [{
        description: {
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
            type: Boolean
        }
    }],
    attachment: [{
        content: {
            required:true,
            type:String
        },
        creation_date: {
            default: new Date(),
            type:Date
        }
    }],
    stage:[{
        _id: {
            required:true,
            type:String
        },
        status:{
            type:String,
            default:"A"
        },
        allocation_date :{
            default: Date(),
            type: Date
        }
    }],
    sprint:[{
        _id: {
            required:true,
            type:String
        },
        status:{
            type:String,
            default:"A"
        },
        allocation_date :{
            default: Date(),
            type: Date
        }
    }],
    project: {
        _id: {
            required:true,
            type:String
        },
        status:{
            type:String,
            default:"A"
        },
        allocation_date :{
            default: Date(),
            type: Date
        }
    },
    priority_level: {
        type: Number
    },
    complexity_level:{
        type:String
    },
    member_allocation: [{
        _id: {
            required:true,
            type:String
        },
        status:{
            type:String,
            default:"A"
        },
        allocation_date :{
            default: Date(),
            type: Date
        }
    }]

});

export const Task = mongoose.model('Task', taskSchema);