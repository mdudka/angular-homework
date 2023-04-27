import { Component, EventEmitter } from '@angular/core';
import { mockUsers } from '../mock-users';
import { IUser } from '../IUser';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css'],
})
export class UsersManagementComponent {
  users: IUser[] = mockUsers;
  searchValue = '';
  selectedUsers: IUser[] = [];
  isAllSelected = false;

  onSearchValueEntered(value: string) {
    this.searchValue = value;
  }

  onUsersSelected(user: IUser) {
    if (!this.selectedUsers.includes(user)) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers = this.selectedUsers.filter(
        () => !this.selectedUsers.includes(user)
      );
    }
  }

  selectAll() {
    this.isAllSelected = !this.isAllSelected;
    this.selectedUsers = this.selectedUsers.length ? [] : [...this.users];
  }

  deleteUsers() {
    this.users = this.users.filter(
      (user) => !this.selectedUsers.includes(user)
    );
    this.selectedUsers = [];
  }
}
