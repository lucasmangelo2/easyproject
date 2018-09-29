import { NgModule } from "@angular/core";
import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SprintComponent } from './sprint/sprint.component';
import { TaskComponent } from './task/task.component';
import { StageComponent } from './stage/stage.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserService } from "./user/user.service";
import { CardComponent } from "./task/card/card.component";
import { CheckboxComponent } from "./task/checkbox/checkbox.component";

import { LoginComponent } from "./user/login/login.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { RegisterComponent } from "./user/register/register.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
  TeamComponent,
  MemberComponent,
  HomeComponent,
  CompanyComponent,
  SprintComponent,
  TaskComponent,
  StageComponent,
  AboutComponent,
  DashboardComponent,
  ViewComponent,
  NotFoundComponent,
  CardComponent,
  CheckboxComponent,
  LoginComponent,
  ProfileComponent,
  RegisterComponent
  ],
  imports: [
    SharedModule.forRoot()
  ],
  providers: [
    UserService
  ],
  bootstrap: []
})
export class EasyProjectModule { }