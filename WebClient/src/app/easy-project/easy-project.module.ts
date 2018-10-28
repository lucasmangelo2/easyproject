import { NgModule } from "@angular/core";

import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';

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

import { ProjectComponent } from './project/project.component';
import { ProjectHeaderComponent } from './project/project-header/project-header.component';
import { SnackbarComponent } from "../shared/messages/snackbar/snackbar.component";
import { TaskComponent } from "./sprints/sprint/task/task.component";
import { StageComponent } from "./sprints/sprint/stage/stage.component";
import { StageAddComponent } from "./sprints/sprint/stage/stage-add/stage-add.component";
import { SprintsComponent } from "./sprints/sprintscomponent";
import { TaskDetailComponent } from "./sprints/sprint/task/task-detail/task-detail.component";
import { SprintTimeLineComponent } from "./sprints/sprint-time-line/sprint-time-line.component";
import { SprintComponent } from "./sprints/sprint/sprint.component";

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
  SprintsComponent,
  TaskDetailComponent,
  ProjectComponent,
  ProjectHeaderComponent,
  SprintTimeLineComponent
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