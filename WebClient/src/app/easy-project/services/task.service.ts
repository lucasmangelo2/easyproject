import { Injectable, EventEmitter, TemplateRef } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Task } from "../models/task.model";
import { Observable, timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";

@Injectable()
export class TaskService {

    editTask : EventEmitter<any> = new EventEmitter<any>();
    newTask : EventEmitter<any> = new EventEmitter<any>();
    onChangeStage : EventEmitter<any> = new EventEmitter<any>();

    constructor(private http: HttpClient,
                private modalService: BsModalService){}

    //#region EventEmitter
    
    onNewTask(id : String){
        this.showModal();
        this.newTask.emit(id);
    }

    onEditTask(obj : Task){
        this.showModal();
        setTimeout(() =>{
            this.editTask.emit(obj);
        },1)
    }

    //#endregion

    //#region Task

    getTaskByStage(id) : Observable<Task[]> {
        let params : HttpParams = new HttpParams();
        
        return this.http
            .get<Task[]>(environment.api_url + "/task_by_stage/" + id)
    }

    postTask(obj : Task) : Observable<Task>{
        return this.http
                    .post<Task>(environment.api_url + "/task/", obj)
    }

    patchTask(obj : Task) : Observable<Task>{
        return this.http
                   .patch<Task>(environment.api_url + "/task/" + obj._id, obj)
    }

    deleteTask(id: String): Observable<any>{
        return this.http
                    .delete(environment.api_url + "/task/" + id)
    }

    //#endregion


    //#region Task Detail Modal

    onModalClose : EventEmitter<any> = new EventEmitter<any>();
    onModalOpen : EventEmitter<any> = new EventEmitter<any>();

    private modalTemplate :TemplateRef<any>;
    private config : ModalOptions = {
        animated: true
    };

    modalRef: BsModalRef;

    setModal(template: TemplateRef<any>){
        this.modalTemplate = template;
    }

    showModal(){
        this.modalRef = this.modalService.show(this.modalTemplate, this.config);
        this.onModalOpen.emit(this.modalRef);
    }

    hideModal(){
        if(this.modalRef){
            this.modalRef.hide();
            this.onModalClose.emit(this.modalRef);
        }
    }

    
    //#endregion
}
