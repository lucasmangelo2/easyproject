import * as mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
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
    }]
});

export const Task = mongoose.model('Task', taskSchema);