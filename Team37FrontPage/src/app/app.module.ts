import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  {path : 'admin/users', component : UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MenuComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
