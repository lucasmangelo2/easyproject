import { Routes } from "@angular/router";

import { HomeComponent } from "./easy-project/home/home.component";
import { NotFoundComponent } from "./easy-project/not-found/not-found.component";
import { LoginComponent } from "./easy-project/user/login/login.component";
import { ProfileComponent } from "./easy-project/user/profile/profile.component";
import { TeamComponent } from "./easy-project/team/team.component";
import { CompanyComponent } from "./easy-project/company/company.component";
import { SprintComponent } from "./easy-project/sprint/sprint.component";
import { TaskComponent } from "./easy-project/task/task.component";
import { ProjectComponent } from "./easy-project/project/project.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'task/:id', component: TaskComponent},
    {path: 'sprint', component: SprintComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'team', component: TeamComponent},
    {path: 'company', component: CompanyComponent},
    {path: '**', component: NotFoundComponent}
]