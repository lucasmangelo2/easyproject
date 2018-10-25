import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Task } from "../models/task.model";
import { Observable, timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class TaskService {

    newTask : EventEmitter<any> = new EventEmitter<any>();
    onChangeStage : EventEmitter<any> = new EventEmitter<any>();

    taskForm : FormGroup;

    constructor(private http: HttpClient,
                private fb : FormBuilder){}

    onNewTask(id : String){
        this.newTask.emit(id);

        this.taskForm = this.fb.group({
            title: ['', Validators.required],
            description: ['']
        })
    }

    getTaskByStage(id) : Observable<Task[]> {
        let params : HttpParams = new HttpParams();
        
        return this.http
            .get<Task[]>(environment.api_url + "/taskbystage/" + id)
    }

    postTask(obj : Task) : Observable<Task>{
        return this.http
                    .post<Task>(environment.api_url + "/task/", obj)
    }

    putTask(obj : Task) : Observable<Task>{
        return this.http
                   .patch<Task>(environment.api_url + "/task/" + obj._id, obj)
    }

    deleteTask(id: String): Observable<any>{
        return this.http
                    .delete(environment.api_url + "/task/" + id)
    }
}
