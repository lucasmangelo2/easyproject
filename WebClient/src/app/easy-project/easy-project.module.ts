import { NgModule } from "@angular/core";

import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SprintComponent } from './sprint/sprint.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserService } from "./services/user.service";

import { LoginComponent } from "./user/login/login.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { RegisterComponent } from "./user/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";

import { TaskComponent } from "./task/task.component";
import { StageComponent } from "./task/stage/stage.component";
import { StageAddComponent } from "./task/stage/stage-add/stage-add.component";
import { CardDetailComponent } from "./task/card/card-detail/card-detail.component";
import { ProjectComponent } from './project/project.component';
import { ProjectHeaderComponent } from './project/project-header/project-header.component';
import { TimeLineCardComponent } from "./sprint/time-line-card/time-line-card.component";
import { CardComponent } from "./task/card/card.component";
import { SnackbarComponent } from "../shared/messages/snackbar/snackbar.component";

@NgModule({
  declarations: [
  TeamComponent,
  MemberComponent,
  HomeComponent,
  CompanyComponent,
  SprintComponent,
  TaskComponent,
  AboutComponent,
  DashboardComponent,
  ViewComponent,
  NotFoundComponent,
  LoginComponent,
  ProfileComponent,
  RegisterComponent,
  StageComponent,
  SidebarMenuComponent,
  StageAddComponent,
  CardComponent,
  CardDetailComponent,
  ProjectComponent,
  ProjectHeaderComponent,
  TimeLineCardComponent
  ],
  imports: [
    SharedModule.forRoot()
  ],
  exports:[
    SnackbarComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: []
})
export class EasyProjectModule { }