import { Attachment } from "./user.model";

export class Task {
    _id: String;
    title: String
    description:String
    status:String
    creation_user_id: String
    creation_date:Date
    start_date:Date
    end_date: Date
    checklist: Checklist[]
    attachment:  Attachment[]
    stage:Stage_Taks[]
    sprint:Sprint_Taks[]
    project: Project_Taks
    priority_level: Number
    complexity_level:String
    member_allocation: Member_Allocation_Taks[]
}

export class Checklist {
    description: String
    creation_date:Date
    complete_date:Date
    complete: Boolean
}

export class Stage_Taks {
    _id :String
    status : string
}

abstract class Allocation {
    _id :string
    status : string
    allocation_date: Date
}

export class Sprint_Taks extends Allocation {}

export class Project_Taks extends Allocation {}

export class Member_Allocation_Taks extends Allocation {}

