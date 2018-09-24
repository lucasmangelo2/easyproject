import { Routes } from "@angular/router";

import { HomeComponent } from "./easy-project/home/home.component";
import { NotFoundComponent } from "./easy-project/not-found/not-found.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: NotFoundComponent}
]