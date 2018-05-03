import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formModel = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,Validators.minLength(6)])]
    });
  }

  onSubmit({value, valid}, e: Event) {
    e.preventDefault();
    if (!valid) {
      return;
    }
  }
}
