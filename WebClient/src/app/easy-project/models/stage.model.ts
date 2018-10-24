import { Task } from "./task.model";

export class Stage{
    _id: String
    title: String
    creation_date: Date
    order: number
    status: String
    project_id: String
    sprint: Sprint_Stage[]
    priority_level:Number
    automatically_concludes_task: Boolean
    task: Task[]
}

export class Sprint_Stage{
    constructor(){}

    _id: String
    status: String
    allocation_date :Date
}