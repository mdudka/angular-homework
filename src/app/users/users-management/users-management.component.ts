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
  searchPlaceholder = 'Search users...';

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
    this.selectedUsers =  [...this.users];
  }

  deleteUsers() {
    this.users = this.users.filter(
      (user) => !this.selectedUsers.includes(user)
    );
    this.selectedUsers = [];
  }

  sortUsers(order: string) {
    if (order === 'ascending') {
      this.users.sort((a, b) => (a['firstname'] > b['firstname'] ? 1 : -1));
    }
    else if (order === 'descending') {
      this.users.sort((a, b) => (a['firstname'] < b['firstname'] ? 1 : -1));
    }
  }
}
