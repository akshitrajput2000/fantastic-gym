import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ad: string = '1635362908540';
  name: string = "";
  constructor(public http: HttpClient,) {
  }

  doUserRegistration(data: any) {
    return this.http.post<string>("http://localhost:5000/api/v1/auth/register", data);
  }
  doUserLogin(data: any) {
    return this.http.post<any[]>("http://localhost:5000/api/v1/auth/login", data);
  }



  isAdmin() {
    return !!localStorage.getItem("loggedadmin");
  }
  isLoggedIn() {
    this.name = localStorage.getItem("loggedusername");
    return !!localStorage.getItem("loggeduser");
  }
  getAllUsers() {
    return this.http.get<any[]>("http://localhost:5000/api/v1/user/allUser/");

  }
  getloggedUserData(userid: string) {
    return this.http.get<any[]>("http://localhost:5000/api/v1/user/profile/" + userid);
  }

  uemailcheckAvail(uemail: string) {
    return this.http.get<any[]>("http://localhost:5000/api/v1/user/uemailcheck/" + uemail);
  }
  uuemailcheckAvail(uemail: string) {
    return this.http.get<any[]>("http://localhost:5000/api/v1/user/uuemailcheck/" + uemail);
  }
  getSingleUserData(userid: string) {
    return this.http.get<any[]>("http://localhost:5000/api/v1/user/getuser/" + userid);
  }
  editsingleUserdata(data: any) {
    return this.http.put<string>("http://localhost:5000/api/v1/user/updateuser", data);
  }

  addpackages(data: any) {
    return this.http.put<string>("http://localhost:5000/api/v1/cart/", data);
  }

  createInvoice(data: any) {
    return this.http.post<string>("http://localhost:5000/api/v1/cart/createInvoice", data);
  }

  deleteUserData(userid: number) {
    return this.http.delete<string>("http://localhost:5000/api/v1/user/deleteuser/" + userid);
  }
  searchUsers(searchtxt: string) {
    return this.http.get<any[]>("http://localhost:5000/api/v1/user/searchuser/" + searchtxt);
  }


}
