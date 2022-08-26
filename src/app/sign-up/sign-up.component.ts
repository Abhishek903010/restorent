import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm!:FormGroup
  constructor(private form_bilder:FormBuilder,private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.form_bilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:[''],
    })

  }
  signUp(){
    this._http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{ 
      alert("registation Successfull")
      this.signupForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("somthing wrong");
    }
    
    )
  }

}
