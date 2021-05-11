import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {

    1000: { uname: "user1", email: 1000, password: 1000 },
    1001: { uname: "user2", email: 1001, password: 1001 },
    1002: { uname: "user3", email: 1002, password: 1002 },
    1003: { uname: "user4", email: 1003, password: 1003 },
    1004: { uname: "user5", email: 1004, password: 1004 }
  }
  constructor() {
    this.getDetails()
  }


  saveDetails() {
    localStorage.setItem(" accountDetails", JSON.stringify(this.accountDetails));
  }

  getDetails() {
    if(localStorage.getItem(" accountDetails")){
    this.accountDetails = JSON.parse(localStorage.getItem(" accountDetails")||'');
  }
  }
  register(uname: any, email: any, password: any) {
    if (email in this.accountDetails) {
      alert("user already exists..please login")
      return false;
    }
    else {
      this.accountDetails[email] = {
        uname,
        email,
        password
      }
      alert("registration successfull")
      console.log(this.accountDetails);
      return true;
    }

  }

  login(email: any, pswd: any) {


    let dataset = this.accountDetails;
    if (email in dataset) {
      var pswd1 = dataset[email].password
      console.log(pswd1);
      
      if (pswd1 == pswd) {
        //this.email = dataset[email].email;

        this.saveDetails();
        return true
      }
      else {
        return false
      }
    }
       else {
        return false
      }

    }
  


   

  }

// product_details =
//     [
//       { sl: 1, name: "vivo Y13", price: 13999, discount: 3000, ram: "4GB", seller: "vivo inc" },
//       { sl: 2, name: "vivo v50", price: 14999, discount: 5000, ram: "4GB", seller: "vivo inc" },
//       { sl: 3, name: "vivo Y3", price: 18999, discount: 6000, ram: "6GB", seller: "vivo inc" },
//       { sl: 4, name: "vivo Y50", price: 19999, discount: 9000, ram: "8GB", seller: "vivo inc" },
//       { sl: 5, name: "vivo Y75", price: 12999, discount: 4000, ram: "2GB", seller: "vivo inc" }
//     ]


//   Account_details =
//     [
//       { uname: 1000, email:1000@gmail.com, password: 1000 },
//       { uname: 1001, password: 1001 },
//       { uname: 1002, password: 1002 },
//       { uname: 1003, password: 1003 },
//       { uname: 1003, password: 1004 }
//     ]
//    datas=JSON.parse(localStorage.getItem("users"))
//   // cart_product = []

//   login(accn: any, password: any) {
//     let uname = this.datas.find(o => o.uname == accn)
//     let password1 = this.datas.find(o => o.password == password)
//     console.log(uname);

//     if (uname && password1) {
//       alert("sucess");
//       this.router.navigateByUrl('home')
//     }
//     else {
//       alert("acccount number or password invalid");
//     }

//   }

//   register(uname: any, password: any) {
//     let data = {uname: uname,password: password }
//     console.log(data);

//     this.Account_details.push(data)
//     localStorage.setItem('users',JSON.stringify(this.Account_details))
//     alert("Registration sucess")
//     this.router.navigateByUrl('')
//   }
//  len=this.cart_product.length
//   cart(i: any) {

//     this.cart_product.push(this.product_details[i])
//     localStorage.setItem('products', JSON.stringify(this.cart_product))

//   }
// routing_cart(){
//   this.router.navigateByUrl('cart')
// }

