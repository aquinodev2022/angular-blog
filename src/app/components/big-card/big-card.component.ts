import { Component, Input, OnInit } from '@angular/core';

@Component({ // Informa ao Angular como o componente deve ser processado, renderizado e estilizado.
  selector: 'app-big-card', // Especifica como o componente será referenciado dentro de outros arquivos HTML do aplicativo Angular.
  templateUrl: './big-card.component.html', // Arquivo HTML contém a estrutura do componente, ou seja, como ele será exibido na página
  styleUrls: ['./big-card.component.css'] // URLs dos arquivos de estilo CSS associados a este componente.
})
export class BigCardComponent implements OnInit { // Define uma classe chamada BigCardComponent e implementa a interface OnInit, que inclui o método ngOnInit() executado após a inicialização do componente.
  // Valores serão substituídos pelos valores fornecidos pelos componentes pais.
  @Input()
  photoCover:string = "" // URL da imagem do big card
  @Input()
  cardTitle:string = "" // Título do big card
  @Input()
  cardDescription:string = "" // Descrição do big card
  @Input()
  Id:string = "0" // Valor padrão do id

  constructor() { } // Inicializar as propriedades do componente

  ngOnInit(): void { // Método chamado após a inicialização do componente.
  }
}
