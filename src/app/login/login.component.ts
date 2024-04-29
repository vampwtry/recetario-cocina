import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    correo:'',
    password:''
  }

  procesar(){
    console.log(this.usuario)
  }
  constructor(){

  }

  ngOnInit(): void {
    
  }

}
