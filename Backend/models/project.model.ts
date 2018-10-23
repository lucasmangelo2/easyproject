import * as mongoose from 'mongoose'

export interface Project extends mongoose.Document {
    name: string,
    description: string,
    creation_date: Date
}

const projectSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    creation_date:{
        default: new Date(),
        type: Date
    },
    status:{
        default: "A",
        type: String
    },
    creation_user_id:{
        type: String
    },
    teams: [{
        type:String
    }]
});

export const Project = mongoose.model('Project', projectSchema);