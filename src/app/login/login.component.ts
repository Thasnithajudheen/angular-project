import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
// import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  uname = "";
  email = "";
  pswd = "";


  constructor(private router: Router, private dataService: DataService) { }


  ngOnInit(): void {
  }
  //event binding
  getEmail(event: any) {
    this.email = event.target.value;
    //console.log(this.email);

  }
  getPassword(Event: any) {
    this.pswd = Event.target.value;
    //console.log(this.pswd);
  }


  login() {

    var emailid = this.email;
    var pwd = this.pswd;
    let dataset = this.dataService.accountDetails;
    if (emailid in dataset) {
      var pswd1 = dataset[emailid].password
      if (pswd1 == pwd) {
        alert("login successfull")
        this.router.navigateByUrl("homepage")

      }


      else {
        alert("incorrect password ")
      }
    }
    else {
      alert("no user exist with this email")
    }
  }



}
  // acno = ''; password= '';
  // loginForm = this.loginbuilder.group({
  //   acno : ['',[Validators.required, Validators.pattern('[0-9]*')]],
  //   password : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  // })
  // login(){

  //   if(this.loginForm.valid){

  //     var accntNo = this.loginForm.value.acno;
  //    // console.log(accntNo);

  //     let pass = this.loginForm.value.password;
  //    // console.log(pass);

  //     let data = this.dataService.accountDetails;

  //     // var result = 
  //     this.dataService.checkLogin(accntNo, pass)
  //     .subscribe((data:any)=>{
  //       if(data){
  //         alert(data.message)
  //         localStorage.setItem("name",data.name)//
  //        // alert("login successfull");
  //        localStorage.setItem("name",data.acno)
  //         this.router.navigateByUrl('user-dashboard');
  //       }
  //     },(data:any)=>{
  //       alert(data.error.message);
  //     })




  //     // if(result){
  //     //   this.router.navigateByUrl('');
  //     // }

  //   }
  //   else{
  //     alert("Invalid form")
  //   }






  // 

  // login(uname:any,password:any){
  //   this.dataservice.login(uname,password)
  // }


