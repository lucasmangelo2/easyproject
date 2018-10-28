import { Injectable } from "@angular/core";
import { Checklist } from "../models/checklist.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class CheckListService {
    
    constructor(private http: HttpClient) {
    }

    //#region TaskCheckList

    getCheckListByTask(id: string): Observable<Checklist[]>{
        return this.http
                   .get<Checklist[]>(environment.api_url + "/checklist_by_task/" + id)
    }

    getCheckList(): Observable<Checklist[]>{
        return this.http
                   .get<Checklist[]>(environment.api_url + "/checklist/")
    }

    postCheckList(obj : Checklist) : Observable<Checklist>{
        return this.http
                   .patch<Checklist>(environment.api_url + "/checklist/", obj)
    }

    patchCheckList(obj : Checklist) : Observable<Checklist>{
        return this.http
                   .patch<Checklist>(environment.api_url + "/checklist/" + obj._id, obj)
    }

    deleteCheckList( obj : Checklist) : Observable<any>{
        return this.http
                   .delete(environment.api_url + "/checklist/" + obj._id)
    }

    //#endregion
}