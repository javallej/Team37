import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './admin/users/users.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : 'admin/users', component : UsersComponent},
  {path : '', component : HomepageComponent},
  {path : '404', component : PageNotFoundComponent},
  {path : '**', redirectTo : '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MenuComponent,
    UsersComponent,
    HomepageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
