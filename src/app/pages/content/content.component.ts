// Importações do Angular para Component e ActivatedRoute e dataFake que contém os dados falsos do aplicativo
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

// Decorador do componente
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
  
export class ContentComponent implements OnInit {
  photoCover: string = ""; //Foto do componente
  contentTitle: string = ""; //Título do componente
  contentDescription: string = ""; //Descrição do componente
  private id: string | null = "0";

  // Construtor do componente, injeta ActivatedRoute para acesso à rota
  constructor(
    private route: ActivatedRoute
  ) { }

  // Método ngOnInit, chamado quando o componente é inicializado
  ngOnInit(): void { 
    // Obtém o parâmetro "id" da URL da rota atual
    this.route.paramMap.subscribe(value => //fornece acesso aos parâmetros da URL
      this.id = value.get("id") // obtém o valor do parâmetro id e armazena o ID do artigo que será mostrado
    );

    // definir os valores das propriedades com base no ID (Imagem, título e descrição)
    this.setComponentValues(this.id);
  }

  // Filtra a lista de artigos fictícios pelo ID
  setComponentValues(id: string | null) {
    // Converte o ID para string para comparação
    const result = dataFake.filter(article => article.id.toString() == id)[0];
    this.photoCover = result.photoCover;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
