import { Injectable } from '@angular/core';
import {User} from "./model/User";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User = new User;

  constructor() {

    this.users.name = "Joe";

  }
}
