import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  expressao: any = "";
  operador: boolean = false;

  adicionarExpressao(valor) {
    if (typeof(this.expressao) == "number") {
      this.expressao = "";
      this.operador = false;
      return;
    }

    if (valor == "/" || valor == "*" || valor == "+" || valor == "-") {
      if (this.expressao.length == 0) {
        return;
      }

      if (this.operador == false) {
        this.operador = true;
      } else {
        return;
      }
    }
    this.expressao += valor;
  }

  removerExpressao() {
    let ultimoCaracter = this.expressao[this.expressao.length - 1];
    if (this.expressao == "") {
      this.operador = false;
      return;
    }
    if (ultimoCaracter == "/" || ultimoCaracter == "*" || ultimoCaracter == "+" || ultimoCaracter == "-") {
      this.operador = false;
    }
    if (typeof(this.expressao) == "number") {
      this.expressao = "";
      this.operador = false;
    }
    else {
    this.expressao = this.expressao.substring(0, this.expressao.length - 1);
    }
  }

  calcularExpressao() {
    if (this.expressao === "") {
      this.operador = false;
      return;
    }
    if (this.operador == false) {
      return
    } else {
      this.expressao = eval(this.expressao);
    }
  }

}
