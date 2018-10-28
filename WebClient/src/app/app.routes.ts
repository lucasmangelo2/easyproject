import { Routes } from "@angular/router";

import { HomeComponent } from "./easy-project/home/home.component";
import { NotFoundComponent } from "./easy-project/not-found/not-found.component";
import { LoginComponent } from "./easy-project/user/login/login.component";
import { ProfileComponent } from "./easy-project/user/profile/profile.component";
import { TeamComponent } from "./easy-project/team/team.component";
import { CompanyComponent } from "./easy-project/company/company.component";
import { ProjectComponent } from "./easy-project/project/project.component";
import { SprintComponent } from "./easy-project/sprints/sprint/sprint.component";
import { SprintsComponent } from "./easy-project/sprints/sprintscomponent";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sprint', component: SprintsComponent},
    {path: 'sprint/:id', component: SprintComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'team', component: TeamComponent},
    {path: 'company', component: CompanyComponent},
    {path: '**', component: NotFoundComponent}
]