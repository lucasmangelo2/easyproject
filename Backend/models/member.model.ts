import * as mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    name:{
        type: String
    },
    occupation_id:{
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
    taks:[{
        type:String
    }]
});

export const Member = mongoose.model('Member', memberSchema);