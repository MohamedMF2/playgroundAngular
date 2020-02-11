import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent implements OnInit {

  
  loginform: FormGroup;


  get username() {
    return this.loginform.get('username')
  }
  get password() {
    return this.loginform.get('password')
  }



  savaFormData() {
    // this.user.push(this.AddingForm.value)
    console.log(this.loginform.value)
  }


  constructor() { }

  ngOnInit() {
    this.loginform = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.maxLength(5)]),
      'password': new FormControl('', [Validators.required, Validators.maxLength(5)]),
    });
  

  }

}