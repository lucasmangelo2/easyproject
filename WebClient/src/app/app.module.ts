import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import {DragulaModule} from 'ng2-dragula';

import { AppComponent } from './app.component';
import { EasyProjectModule } from './easy-project/easy-project.module';
import { ROUTES } from './app.routes';
import { NotificationService } from './shared/messages/notification.services';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EasyProjectModule,
    HttpModule,
    DragulaModule.forRoot(),
    // PreloadAllModules pre carrega os módulos lazy no início da aplicação, isso agiliza o acesso a módulos grandes, proporcionando fluídez na navegação
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}), 
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
