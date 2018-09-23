import * as mongoose from 'mongoose'

const sprintSchema = new mongoose.Schema({
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
    status: {
        type: String
    },
    project_id:{
        type: String
    },
    teams: [{
        type: String
    }]
});

export const Sprint = mongoose.model('Sprint', sprintSchema);