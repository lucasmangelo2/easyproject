import { HttpHeaders } from "@angular/common/http";

export abstract class BaseService {

    private getHeader(): HttpHeaders{
        let header = new HttpHeaders();
        header.append('Content-type', 'application/json');
        return header;
    }
}