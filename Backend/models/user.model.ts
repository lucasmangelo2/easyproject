import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { validateCPF } from '../common/validators';
import { enviroment } from '../common/enviroment';

export interface User extends mongoose.Document {
    name: string,
    email: string,
    password: string
}

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 80,
        minlength: 3
    },
    email:{
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    gender: {
        type: String,
        required: false,
        enum: ['Male', 'Female']
    },
    cpf: {
        type: String,
        required: false,
        validate:{
            validator: validateCPF,
            message: '{PATH}: invalid CPF ({VALUE})' // PATH - atributo em questão, VALUE - valor atribuído
        }
    },
    attachment: [{
        content: String,
        creation_date: Date
    }],
    creation_date:{
        default: new Date(),
        type: Date
    }
});

const hashPasword = function(obj, next){
    //o segundo parâmetro representa os ciclos que o bcrypt fará para gerar o hash do password
    bcrypt.hash(obj.password, enviroment.security.saltRounds)
        .then(hash => {
            obj.password = hash
            next();
        })
        .catch(next);
}

const saveMiddleware = function(next){
    const user: User = this;

    if(!user.isModified('password'))
        next();
    else
        hashPasword(user, next);
}

const updateMiddleware = function(next){
    if(!this.getUpdate().password)
        next();
    else
        hashPasword(this.getUpdate(), next);
}

// middleware de documento
userSchema.pre('save', saveMiddleware)

// middleware de query
userSchema.pre('findOneAndUpdate', updateMiddleware);
userSchema.pre('update', updateMiddleware);

export const User = mongoose.model<User>('User', userSchema);

