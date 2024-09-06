import { Component, OnInit} from '@angular/core';3
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private navega: NavController, public toastController: ToastController) {}

  ngOnInit(){}

  nome: any = "";
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

  gravar(){

    if (this.nome != ""){
      this.erro = "";

      if(this.login != ""){
        this.erro = "";

        if(this.senha != ""){
          this.erro = "";

          localStorage.setItem("nome", this.nome);
          this.nome = "";
          localStorage.setItem("login", this.login);
          this.login = "";
          localStorage.setItem("senha", this.senha);
          this.senha = "";

          this.navega.navigateForward("loguin");
        }
        else{
          this.erro = "Senha Inválida";
          this.erroToast();
        }
      }
      else{
        this.erro = "Login Inválido!";
        this.erroToast();
      }
    }
    else{
      this.erro = "Usuário Inválido!";
      this.erroToast();
    }
  }
}