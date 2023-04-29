import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UsercardComponent } from './usercard/usercard.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SearchComponent } from './search/search.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { MatDividerModule } from '@angular/material/divider';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    ToolbarComponent,
    UsercardComponent,
    SearchComponent,
    UsersManagementComponent,
    AddUserFormComponent,
  ],
  exports: [ToolbarComponent, UsercardComponent, UsersManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSnackBarModule
  ],
})
export class UsersModule {}
