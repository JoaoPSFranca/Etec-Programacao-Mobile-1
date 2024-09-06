import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.page.html',
  styleUrls: ['./loguin.page.scss'],
})
export class LoguinPage implements OnInit {

  constructor(private navega: NavController, public toastController: ToastController) {}

  ngOnInit() {
  }

  login: any = "";
  senha:any = "";
  erro: any;
  async erroToast() {
    const toast = await this.toastController.create({
      message: this.erro,
      duration: 2000
    });
    toast.present();
  }

  verificar(){
    if(this.login == localStorage.getItem("login")){
      this.erro = "";

      if(this.senha == localStorage.getItem("senha")){
        this.erro = "";

        this.navega.navigateForward("logado");
      }
      else{
        this.erro = "Senha Incorreta!";
        this.erroToast();
      }
    }
    else{
      this.erro = "Login Incorreto!";
      this.erroToast();
    }
  }
}
