import * as mongoose from 'mongoose'

export interface Company extends mongoose.Document {
    name: string,
    creation_date: Date
}

const companySchema = new mongoose.Schema({
    name:{
        required:true,
        type: String
    },
    short_name:{
        type:String
    },
    description:{
        type: String
    },
    creation_date:{
        default: new Date(),
        type: Date
    },
    cnpj:{
        type:String
    },
    status: {
        default: "A",
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