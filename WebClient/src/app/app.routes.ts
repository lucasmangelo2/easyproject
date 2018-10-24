import { Routes } from "@angular/router";

import { HomeComponent } from "./easy-project/home/home.component";
import { NotFoundComponent } from "./easy-project/not-found/not-found.component";
import { LoginComponent } from "./easy-project/user/login/login.component";
import { BoardComponent } from "./easy-project/board/board.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'task', component: BoardComponent},
    {path: '**', component: NotFoundComponent}
]