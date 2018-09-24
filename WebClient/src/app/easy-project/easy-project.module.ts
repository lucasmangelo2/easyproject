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
  NotFoundComponent
  ],
  imports: [
    
  ],
  providers: [],
  bootstrap: []
})
export class EasyProjectModule { }