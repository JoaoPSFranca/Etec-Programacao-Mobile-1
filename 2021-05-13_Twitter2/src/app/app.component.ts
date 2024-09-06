import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Listas', url: '/folder/Listas', icon: 'reader' },
    { title: 'Tópicos', url: '/folder/Topicos', icon: 'chatbubble-ellipses' },
    { title: 'Itens salvos', url: '/folder/ItensSalvos', icon: 'bookmark' },
    { title: 'Moments', url: '/folder/Moments', icon: 'flash' },
  ];
  public labels = ['Configurações e privacidade', 'Central de Ajuda'];
  constructor() {}
}