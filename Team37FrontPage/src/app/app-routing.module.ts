import { NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./admin/users/users.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path : 'admin/users/add', component : UsersComponent},
  {path : '', component : HomepageComponent},
  {path : '404', component : PageNotFoundComponent},
  {path : '**', redirectTo : '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{
}
