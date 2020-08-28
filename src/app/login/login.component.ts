import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router
  ) { }

  onLogIn() {
    localStorage.setItem('logged', 'yes');
    this.router.navigate(['productos']);
  }

  ngOnInit(): void {
    if (localStorage.getItem('logged')) {
      this.router.navigate(['productos']);
    }
  }

}
