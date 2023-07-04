import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;

  constructor(public userSer: UsersService, public myRouter: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  doLogin(form: NgForm) {
    // console.log(form.value);

    this.userSer.doUserLogin(form.value).subscribe((data: any[]) => {

      if (data.length == 0) {
        this.msg = "Invalid Login";
      }
      else {
        localStorage.setItem("loggeduser", data[0]._id);
        localStorage.setItem("loggedusername", data[0].Fname);
        localStorage.setItem("loggedusernamee", data[0].lname);
        localStorage.setItem("loggedusergen", data[0].gender);
        localStorage.setItem("loggeduserage", data[0].userage);
        localStorage.setItem("loggeduserisadmin", data[0].isAdmin);
        this.myRouter.navigateByUrl("/profile");
      }
      if (data[0].isAdmin === true) {
        localStorage.setItem("loggedadmin", data[0]._id);

      }

    }, (error: any) => {

      console.log(error);

      this.msg = "Something went wrong";

    });
  }

}