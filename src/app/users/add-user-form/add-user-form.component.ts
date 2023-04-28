import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css'],
})
export class AddUserFormComponent {
  userForm: FormGroup = this.fb.group({
    name: ['', Validators.minLength(2)],
    username: [
      '',
      Validators.compose([Validators.minLength(2), Validators.maxLength(60)]),
    ],
    email: ['', Validators.email],
    phone: ['', Validators.pattern(/^[0-9]+$/)],
  });

  // name: ['', Validators.minLength(2)],
  // username: ['', Validators.minLength(2), Validators.maxLength(60)],
  // email: ['', Validators.email],
  // phone: ['', Validators.pattern(/^[0-9]+$/)],

  constructor(private fb: FormBuilder) {}
}
