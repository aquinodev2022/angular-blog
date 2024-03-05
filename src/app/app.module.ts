import { NgModule } from '@angular/core'; // decorador essencial para definir módulos Angular
import { BrowserModule } from '@angular/platform-browser'; // fornece funcionalidades essenciais para executar uma aplicação Angular no navegador

import { AppRoutingModule } from './app-routing.module'; // roteamento da aplicação
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent, // componente raiz que define a estrutura geral da aplicação.
    MenuBarComponent, // renderiza a barra de menu da aplicação.
    MenuTitleComponent, // renderiza o título do menu
    BigCardComponent, // renderiza um card grande com informações.
    SmallCardComponent, // renderiza um card pequeno com informações.
    HomeComponent, // página inicial da aplicação
    ContentComponent // renderiza o conteúdo de uma página específica.
  ],
  //módulos externos que este módulo precisa para funcionar
  imports: [ 
    BrowserModule, // renderizar componentes na DOM
    AppRoutingModule // utilização do roteamento definido nesse módulo.
  ],
  providers: [], // especificar serviços que devem ser disponibilizados para injeção de dependência em todo o módulo
  bootstrap: [AppComponent] // componente que deve ser carregado como componente raiz da aplicação
})
export class AppModule { } // Exporta a classe AppModule, tornando-a disponível para outros módulos da aplicação.
