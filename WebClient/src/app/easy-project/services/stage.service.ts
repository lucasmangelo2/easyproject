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

    patchStage(obj : Stage) : Observable<any>{
        return this.http
            .patch(environment.api_url + "/stage/" + obj._id, obj, {headers: this.getHeader()})
    }

    private getHeader(): HttpHeaders{
        let header = new HttpHeaders();
        header.append('Content-type', 'application/json');
        return header;
    }
}
