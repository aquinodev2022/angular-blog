import { NgModule } from '@angular/core'; // ferramentas para construir os blocos básicos da aplicação
import { RouterModule, Routes } from '@angular/router'; // importações são necessárias para configurar o roteamento
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [ // array de objetos Routes que mapeiam padrões de URL para componentes
  {
    path: '', // configuração de rota corresponde a URL raiz do aplicativo
    component:HomeComponent
  },
  {
    path: 'content/:id', //rota dinâmica com um parâmetro
    component:ContentComponent
  }
];

// roteamento dentro do aplicativo
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa o módulo RouterModule e configura as rotas da aplicação
  exports: [RouterModule] // Exporta o módulo RouterModule para que outros módulos da aplicação possam utilizá-lo
})
export class AppRoutingModule { } // Exporta o AppRoutingModule para que possa ser usado no módulo principal da aplicação.
