import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  uname="";
  email="";
  pswd="";
  
    
    
      register()
      {
    
    var result=this.dataService.register(this.uname,this.email,this.pswd)
    if(result){//true
        this.router.navigateByUrl("");
    }
    else{
      this.router.navigateByUrl("");
    }
    
      }
    
    }

  // register(uname:any,email:any,password:any){
  //   console.log(uname);
    
    
    
  //   this.dataservice.register(uname,email,password,)
  // }
  



