import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.page.html',
  styleUrls: ['./logado.page.scss'],
})
export class LogadoPage implements OnInit {

  constructor(private navega: NavController) {}

  ngOnInit() {
  }

  nome:any = localStorage.getItem("nome");

  deletar(){
    localStorage.removeItem("nome");
    localStorage.removeItem("login");
    localStorage.removeItem("senha");
    this.navega.navigateForward("home");
  }
}
