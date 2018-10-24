export class User{
    constructor(){}

    _id: String
    name:String
    email: String
    password: String
    gender: String
    cpf: String
    attachment: Attachment[]
    creation_date:Date
}

export class Attachment{

    _id: String
    content: String
    creation_date: Date
}