import * as mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    creation_date:{
        type: Date
    },
    status:{
        type: String
    },
    teams: [{
        type:String
    }],
    members:[{
        type:String
    }]
});

export const Project = mongoose.model('Project', projectSchema);