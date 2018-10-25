import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Sprint } from '../models/sprint.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private http: HttpClient) { }

  getSprints() : Observable<Sprint[]> {    
    return this.http
        .get<Sprint[]>(environment.api_url + "/sprint/")
}
}
