import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='amel'
  password=''
  ErrorMessage='Invalid password'
  //error = 'Invalid username'
  InvalidLogin= false
  //router
  //Angular.giveMeRouter
  //Dependency Injection




  constructor(private router:Router , 
    private hardcodeAuthenticationService: HardcodeAuthenticationService ) { }

  ngOnInit() {
  }
  Do() {
   // if(this.username==='amel' && this.password==='ajmi' )
    if(this.hardcodeAuthenticationService.authenticate(this.username, this.password)){
     //redirect to welcome page
     this.router.navigate (['welcome',this.username])
      this.InvalidLogin= false
    }
    else {
      this.InvalidLogin=true
    }



    //console.log(this.username);
  }

}
