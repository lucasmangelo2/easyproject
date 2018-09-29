
export class SystemUser{
    constructor(){}
    Id?:number;
    FirstName?:string;
    LastName?:string;
    SystemUserName?:string;
    SystemUserStatus?:number;
    Nickname?:string;
    //FileBase64Id?:number;
    CategoryId?:number;
    Password?:string;
    BirthDay?:Date;
}

export class userDTO{
    constructor(){}
    FirstName?:string;
    LastName?:string;
    Nickname?:string;
    Password?:string;
}