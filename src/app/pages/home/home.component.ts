import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { // Exporta a classe `HomeComponent` e implementa a interface `OnInit`

  constructor() { } // O construtor é executado quando uma nova instância do componente é criada.

  ngOnInit(): void { //Executado após a inicialização do componente. Usado para buscar dados, configurar o componente
  
}
}