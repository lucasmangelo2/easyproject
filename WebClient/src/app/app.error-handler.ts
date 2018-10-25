import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import { NotificationService } from './shared/messages/notification.services';
//import { LoginService } from './security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler{

    constructor(private ns: NotificationService,
                private injector: Injector,
                private zone: NgZone){
        //A cláusula super() foi aplicado pois o construtor do ErrorHandler parou de ser chamado
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any){
        
        if(errorResponse instanceof HttpErrorResponse){
            
            const message = errorResponse.error.message;

            // A blibioteca NgZone é necessário pois o ErrorHandler "trabalha" fora da zona do angular
            // podendo interferir na detecção de mudança de estado de um componente
            this.zone.run(()=> {
                switch(errorResponse.status){
                    case 401:
                        //this.injector.get(LoginService).handleLogin();
                        break;
                    case 403:
                        this.ns.notify(message || 'Não Autorizado');
                        break;
                    case 404:
                        this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes');
                        break;
                }
            });
        }
        else
            this.ns.notify('Erro ao acessar o recurs. Por favor, contacte o administador do sistema ou tente novamente');

        super.handleError(errorResponse);
    }
}