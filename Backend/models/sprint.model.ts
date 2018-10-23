import * as mongoose from 'mongoose'

const sprintSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    creation_date:{
        default: new Date(),
        type: Date
    },
    start_date:{
        required:true,
        type: Date
    },
    end_date: {
        type: Date
    },
    conclusion_date:{
        type: Date
    },
    status: {
        default: "A",
        type: String
    },
    project_id:{
        required:true,
        type: String
    },
    teams: [{
        required:true,
        type: String
    }]
});

export const Sprint = mongoose.model('Sprint', sprintSchema);