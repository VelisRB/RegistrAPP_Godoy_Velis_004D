import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }



  menuUsuario(){
    this.menuController.open('end');
  }

  usuario={
    suge:'',
    email:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
    
  }


}
