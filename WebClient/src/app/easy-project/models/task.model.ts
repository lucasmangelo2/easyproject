import { Attachment } from "./user.model";

export class Task {
    _id: string;
    title: string
    description: string
    status:string
    creation_user_id: string
    creation_date:Date
    start_date:Date
    end_date: Date
    attachment:  string[] = []
    stage:Stage_Taks
    project: Project_Taks
    priority_level: Number
    complexity_level:String
    member_allocation: Member_Allocation_Taks[] = []
}
export class Stage_Taks {
    _id :string
    status? : string
}

abstract class Allocation {
    _id :string
    status : string
    allocation_date: Date
}

export class Sprint_Taks extends Allocation {}

export class Project_Taks extends Allocation {}

export class Member_Allocation_Taks extends Allocation {}

