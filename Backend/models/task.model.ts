import * as mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    status:{
        type:String
    },
    creation_date:{
        type: Date
    },
    start_date:{
        type: Date
    },
    end_date: {
        type: Date
    },
    checklist: [{
        description: String,
        creation_date: Date,
        complete_date: Date,
        complete: Boolean
    }],
    attachment: [{
        content: String,
        creation_date: Date
    }],
    stage:[{
        id:String,
        status: String
    }],
    Sprint:[{
        id:String,
        status: String,
        allocation_date : Date
    }],
    project: [{
        id:String,
        status: String,
        allocation_date : Date
    }],
    priority_level: {
        type: Number
    },
    complexity_level:{
        type:String
    },
    member_allocation: [{
        member_id:String,
        status: String,
        allocation_date : Date
    }]

});

export const Task = mongoose.model('Task', taskSchema);