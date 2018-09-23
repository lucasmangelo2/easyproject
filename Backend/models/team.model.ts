import * as mongoose from 'mongoose'

const temaSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    creation_date:{
        type: Date
    },
    status: {
        type: String
    },
    members: [{
        type:String
    }],
    projects:[{
        type:String
    }]
});

export const Team = mongoose.model('Team', temaSchema);