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
import { UserService } from "./user/user.service";

import { LoginComponent } from "./user/login/login.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { RegisterComponent } from "./user/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";
import { TaskComponent } from "./board/task/task.component";
import { BoardComponent } from "./board/board.component";
import { StageComponent } from "./board/stage/stage.component";
import { StageAddComponent } from "./board/stage/stage-add/stage-add.component";
import { TaskDetailComponent } from "./board/task/taks-detail/task-detail.component";

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
  BoardComponent,
  LoginComponent,
  ProfileComponent,
  RegisterComponent,
  StageComponent,
  SidebarMenuComponent,
  StageAddComponent,
  TaskDetailComponent
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