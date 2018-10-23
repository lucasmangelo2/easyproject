import * as mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    creation_date:{
        default:new Date(),
        type: Date
    },
    status: {
        default:"A",
        type: String
    },
    members: [{
        type:String
    }],
    projects:[{
        type:String
    }]
});

export const Team = mongoose.model('Team', teamSchema);