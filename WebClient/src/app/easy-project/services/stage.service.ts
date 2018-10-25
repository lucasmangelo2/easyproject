import { Injectable, EventEmitter } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Stage } from "../models/stage.model";

@Injectable()
export class StageService {

    newStage : EventEmitter<any> = new EventEmitter<any>();

    constructor(private http: HttpClient){}

    onNewStage(id : String){
        this.newStage.emit(id);
    }

    getStage() : Observable<any> {
        return this.http
            .get(environment.api_url + "/stage/")
    }

    getStageBySprint(id : string ) : Observable<any> {
        return this.http
            .get(environment.api_url + "/stagebysprint/" + id)
    }

    patchStage(obj : Stage) : Observable<any>{
        return this.http
            .patch(environment.api_url + "/stage/" + obj._id, obj)
    }

    
}
