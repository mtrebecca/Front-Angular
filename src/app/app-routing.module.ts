import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { RecompensaComponent } from './body/recompensa/recompensa.component';
import { AjudaComponent } from './body/ajuda/ajuda.component';
import { ContatoComponent } from './body/contato/contato.component';
import { ListarComponent } from './produto/listar/listar.component';
import { MercadoComponent } from './categorias/mercado/mercado.component';
import { PromocoesComponent } from './categorias/promocoes/promocoes.component';
import { LanchesComponent } from './categorias/lanches/lanches.component';
import { PizzaComponent } from './categorias/pizza/pizza.component';
import { VegetarianaComponent } from './categorias/vegetariana/vegetariana.component';
import { JaponesaComponent } from './categorias/japonesa/japonesa.component';
import { BrasileiraComponent } from './categorias/brasileira/brasileira.component';
import { BebidasComponent } from './categorias/bebidas/bebidas.component';
import { AcaiComponent } from './categorias/acai/acai.component';
import { DocesebolosComponent } from './categorias/docesebolos/docesebolos.component';
import { ArabeComponent } from './categorias/arabe/arabe.component';
import { ItalianaComponent } from './categorias/italiana/italiana.component';
import { PainelControleComponent } from './admin/painel-controle/painel-controle.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { VendasComponent } from './admin/vendas/vendas.component';
import { MensagensComponent } from './admin/mensagens/mensagens.component';
import { ProdutosComponent } from './admin/produtos/produtos.component';
import { RewardComponent } from './admin/reward/reward.component';
import { CriarProdutoComponent } from './admin/criar-produto/criar-produto.component';
import { EditarComponent } from './admin/editar/editar.component';
import { NotFoundComponent } from './body/not-found/not-found.component';
import { GetusuariosComponent } from './user/getusuarios/getusuarios.component';
import { CriausuarioComponent } from './user/criausuario/criausuario.component';
import { EditausuarioComponent } from './user/editausuario/editausuario.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'recompensas',component:RecompensaComponent},
  {path:'ajuda',component:AjudaComponent},
  {path:'contato',component:ContatoComponent},
  {path:'produtos', component: ListarComponent},
  {path:'mercado', component: MercadoComponent},
  {path:'promocao', component: PromocoesComponent},
  {path:'lanches', component: LanchesComponent},
  {path:'pizza', component: PizzaComponent},
  {path:'vegetariana', component: VegetarianaComponent},
  {path:'japonesa', component: JaponesaComponent},
  {path:'brasileira', component: BrasileiraComponent},
  {path:'bebidas', component: BebidasComponent},
  {path:'acai', component: AcaiComponent},
  {path:'docesebolos', component: DocesebolosComponent},
  {path:'arabe', component: ArabeComponent},
  {path:'italiana', component: ItalianaComponent},

  // componente do admin
  {path:'admin', component: PainelControleComponent},
  {path:'admin/dashboard', component: DashboardComponent},
  {path:'admin/produtos', component: ProdutosComponent},
  {path:'admin/vendas', component: VendasComponent},
  {path:'admin/mensagens', component: MensagensComponent},
  {path:'admin/reward', component: RewardComponent},
  {path:'admin/produto/criar', component: CriarProdutoComponent},
  {path:'admin/produto/editar/:id', component: EditarComponent},
  
  //componentes do usuario
  {path:'admin/usuarios', component: GetusuariosComponent},
  {path:'admin/usuarios/criar', component: CriausuarioComponent},
  {path:'admin/usuarios/editar/:id', component: EditausuarioComponent},
  

  //redireciona para a principal caso entre em rota inexistente
  {path:'404', component: NotFoundComponent},  
  {path: '**', redirectTo: '404'},
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
