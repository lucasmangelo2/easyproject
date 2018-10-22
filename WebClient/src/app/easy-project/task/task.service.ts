import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class TaskService {

    newTask : EventEmitter<any> = new EventEmitter<any>();

    constructor(){}

    onNewTask(id : string){
        this.newTask.emit(id);
    }

}