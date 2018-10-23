import * as mongoose from 'mongoose'

export interface Member extends mongoose.Document {
    name: string,
    creation_date: Date
}

const memberSchema = new mongoose.Schema({
    type_member:{
        default: "Common",
        type: String,
        enum:["Admin","Common"]
    },
    occupation_id:{
        type: String
    },
    user_id:{
        required: true,
        type: String
    },
    creation_date:{
        default:new Date(),
        type: Date
    },
    status:{
        default: "A",
        type: String
    },
    teams: [{
        required:true,
        type:String
    }],
    taks:[{
        type:String
    }]
});

export const Member = mongoose.model('Member', memberSchema);