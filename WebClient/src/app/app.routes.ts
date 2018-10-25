import { Routes } from "@angular/router";

import { HomeComponent } from "./easy-project/home/home.component";
import { NotFoundComponent } from "./easy-project/not-found/not-found.component";
import { LoginComponent } from "./easy-project/user/login/login.component";
import { BoardComponent } from "./easy-project/board/board.component";
import { ProfileComponent } from "./easy-project/user/profile/profile.component";
import { TeamComponent } from "./easy-project/team/team.component";
import { CompanyComponent } from "./easy-project/company/company.component";
import { SprintComponent } from "./easy-project/sprint/sprint.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'board/:id', component: BoardComponent},
    //{path: 'board', component: BoardComponent},
    {path: 'sprint', component: SprintComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'team', component: TeamComponent},
    {path: 'company', component: CompanyComponent},
    {path: '**', component: NotFoundComponent}
]