import { Component, OnInit } from '@angular/core';
import { IUser } from '../IUser';
import { UsersService } from '../users.service';

import { tap } from 'rxjs/operators';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css'],
})
export class UsersManagementComponent implements OnInit {
  users: IUser[] = [];
  selectedUsers: IUser[] = [];
  searchValue = '';
  searchPlaceholder = 'Search users...';
  isAllSelected = false;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService
      .getUsers()
      .pipe(
        catchError((err) => {
          throw err;
        })
      )
      .subscribe((users) => {
        this.users = users;
      });
  }

  addUser(userData: IUser): void {
    this.usersService
      .addUser(userData)
      .pipe(
        catchError((err) => {
          throw err;
        })
      )
      .subscribe((user) => {
        this.users.push(user);
      });
  }


  deleteUsers() {
    for (const user of this.selectedUsers) {
      this.usersService
        .deleteUser(user.id)
        .pipe(
          catchError((err) => {
            throw err;
          })
        )
        .subscribe(() => {
          this.users = this.users.filter(
            (user) => !this.selectedUsers.includes(user)
          );
          this.selectedUsers = [];
        });
    }
  }

  sortUsers(order: string) {
    if (order === 'ascending') {
      this.users.sort((a, b) =>
        a['name'].toLowerCase() > b['name'].toLowerCase() ? 1 : -1
      );
    } else if (order === 'descending') {
      this.users.sort((a, b) =>
        a['name'].toLowerCase() < b['name'].toLowerCase() ? 1 : -1
      );
    }
  }

  onSearchValueEntered(value: string) {
    this.searchValue = value;
  }

  onUsersSelected(selectedUser: IUser) {
    const selectedUserIndex = this.selectedUsers.findIndex(
      (user) => user.id === selectedUser.id
    );
    if (selectedUserIndex !== -1) {
      this.selectedUsers.splice(selectedUserIndex, 1);
    } else {
      this.selectedUsers.push(selectedUser);
    }
  }

  selectAll() {
    this.isAllSelected = !this.isAllSelected;
    if (this.selectedUsers.length === this.users.length) {
      this.selectedUsers = [];
    } else {
      this.selectedUsers = [...this.users];
    }
  }
}
