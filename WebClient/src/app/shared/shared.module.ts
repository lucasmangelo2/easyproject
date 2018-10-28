import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

import { InputComponent } from "./input/input.component";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserService } from "../easy-project/services/user.service";
import { DragulaModule } from "ng2-dragula";
import { RouterModule } from "@angular/router";
import { TaskService } from "../easy-project/services/task.service";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { StageService } from "../easy-project/services/stage.service";
import { NotificationService } from "./messages/notification.services";
import { SprintService } from "../easy-project/services/sprint.service";
import { CheckListService } from "../easy-project/services/checklist.servce";



@NgModule({
    declarations:[
        InputComponent,
        SnackbarComponent,
        CheckboxComponent
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
        ModalModule.forRoot(),
        DatepickerModule.forRoot()
    ],
    exports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        InputComponent,
        SnackbarComponent,
        FormsModule, 
        ReactiveFormsModule,
        DragulaModule,
        RouterModule,
        ModalModule,
        DatepickerModule,
        CheckboxComponent
    ],
})

export class SharedModule{

    //essa função estática substitui o CoreModules, pois é possível dinamizar o carregamento dos providers com o SharedModule
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers:[
                UserService,
                TaskService,
                StageService,
                SprintService,
                CheckListService,
                NotificationService
                /*{provide: HTTP_INTERCEPTORS, //useClass: AuthInterceptor,
                     multi: true}*/
            ]
        }
    }
}