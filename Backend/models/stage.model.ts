import * as mongoose from 'mongoose'

const stageSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    creation_date:{
        type: Date
    },
    order: {
        type: Number
    },
    status: {
        type: String
    }
});

export const Stage = mongoose.model('Stage', stageSchema);