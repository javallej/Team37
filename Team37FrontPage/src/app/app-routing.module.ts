import { NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./admin/users/users.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path: '/admin/users', component: UsersComponent},
  {path: '', component: HomepageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{
}
