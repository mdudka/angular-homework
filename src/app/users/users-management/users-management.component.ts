import { Component, OnInit } from '@angular/core';
import { IUser } from '../IUser';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css'],
})
export class UsersManagementComponent implements OnInit {
  users: IUser[] = [];
  searchValue = '';
  selectedUsers: IUser[] = [];
  isAllSelected = false;
  searchPlaceholder = 'Search users...';

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.usersService.getUsers();
  }

  selectAll() {
    this.isAllSelected = !this.isAllSelected;
    this.selectedUsers = [...this.users];
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
    } else if (order === 'descending') {
      this.users.sort((a, b) => (a['firstname'] < b['firstname'] ? 1 : -1));
    }
  }

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
}
