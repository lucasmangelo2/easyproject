import * as mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
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
    teams: [{
        type:String
    }],
    projects:[{
        type:String
    }]
});

export const Company = mongoose.model('Company', companySchema);