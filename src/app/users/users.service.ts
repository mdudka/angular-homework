import { Injectable } from '@angular/core';
import {IUser} from "./IUser";
import {mockUsers} from "./mock-users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): IUser[] {
    return mockUsers;
  }
}
