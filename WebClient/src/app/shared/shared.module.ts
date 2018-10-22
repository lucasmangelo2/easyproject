import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ModalModule } from 'ngx-bootstrap/modal';

import { InputComponent } from "./input/input.component";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserService } from "../easy-project/user/user.service";
import { DragulaModule } from "ng2-dragula";
import { RouterModule } from "@angular/router";
import { TaskService } from "../easy-project/task/task.service";


@NgModule({
    declarations:[
        InputComponent,
        SnackbarComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule,
        DragulaModule.forRoot(),
        ModalModule.forRoot()
    ],
    exports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        InputComponent,
        SnackbarComponent,
        // é possível exportar qualquer módulo que pode ser utilizado por outro módulo, assim o módulo principal não precisa declarar novarmente
        FormsModule, 
        ReactiveFormsModule,
        DragulaModule,
        RouterModule,
        ModalModule
    ],
})

export class SharedModule{

    //essa função estática substitui o CoreModules, pois é possível dinamizar o carregamento dos providers com o SharedModule
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers:[
                UserService,
                TaskService
                /*{provide: HTTP_INTERCEPTORS, //useClass: AuthInterceptor,
                     multi: true}*/
            ]
        }
    }
}