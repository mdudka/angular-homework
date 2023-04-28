import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() addUserFormSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.addUserFormSubmit.emit(this.userForm.value);
    this.userForm.reset();
  }
}
