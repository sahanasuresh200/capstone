import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }

  RegisterForm = new FormGroup({
    name : new FormControl(""),
    email : new FormControl(""),
    pwd : new FormControl(""),
    rpwd : new FormControl("")
  })

  registerSubmited(){
    console.log(this,this.RegisterForm);
  }
}
