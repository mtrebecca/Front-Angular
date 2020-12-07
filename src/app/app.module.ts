import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './paginas/nav-menu/nav-menu.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { InstitucionalComponent } from './body/institucional/institucional.component';
import { RecompensaComponent } from './body/recompensa/recompensa.component';
import { AjudaComponent } from './body/ajuda/ajuda.component';
import { ContatoComponent } from './body/contato/contato.component';
import { HomeComponent } from './body/home/home.component';
import { ListarComponent } from './produto/listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuLateralComponent } from './body/menu-lateral/menu-lateral.component';
import { UnidadeComponent } from './produto/unidade/unidade.component';
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
import { BreadcrumbComponent } from './body/breadcrumb/breadcrumb.component';
import { CarrouselComponent } from './body/carrousel/carrousel.component';
import { ConteudoHomeComponent } from './body/conteudo-home/conteudo-home.component';
import { MenuAdminComponent } from './body/menu-admin/menu-admin.component';
import { NavAdminComponent } from './body/nav-admin/nav-admin.component';
import { FooterAdminComponent } from './admin/footer-admin/footer-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { ProdutosComponent } from './admin/produtos/produtos.component';
import { VendasComponent } from './admin/vendas/vendas.component';
import { MensagensComponent } from './admin/mensagens/mensagens.component';
import { RewardComponent } from './admin/reward/reward.component';
import { CreateComponent } from './produto/create/create.component';
import { FormComponent } from './produto/form/form.component';
import { ErrorMsgComponent } from './body/error-msg/error-msg.component';
import { FormsModule } from '@angular/forms';
import { CriarProdutoComponent } from './admin/criar-produto/criar-produto.component';
import { FormProdutoComponent } from './admin/form-produto/form-produto.component';
import { EditarComponent } from './admin/editar/editar.component';
import { NotFoundComponent } from './body/not-found/not-found.component';
import { FilterPipe } from './filter.pipe';
import { GetusuariosComponent } from './user/getusuarios/getusuarios.component';
import { GetusuarioComponent } from './user/getusuario/getusuario.component';
import { FormusuarioComponent } from './user/formusuario/formusuario.component';
import { CriausuarioComponent } from './user/criausuario/criausuario.component';
import { EditausuarioComponent } from './user/editausuario/editausuario.component'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    InstitucionalComponent,
    RecompensaComponent,
    AjudaComponent,
    ContatoComponent,
    HomeComponent,
    ListarComponent,
    MenuLateralComponent,
    UnidadeComponent,
    MercadoComponent,
    PromocoesComponent,
    LanchesComponent,
    PizzaComponent,
    VegetarianaComponent,
    JaponesaComponent,
    BrasileiraComponent,
    BebidasComponent,
    AcaiComponent,
    DocesebolosComponent,
    ArabeComponent,
    ItalianaComponent,
    PainelControleComponent,
    BreadcrumbComponent,
    CarrouselComponent,
    ConteudoHomeComponent,
    MenuAdminComponent,
    NavAdminComponent,
    FooterAdminComponent,
    DashboardComponent,
    UsuariosComponent,
    ProdutosComponent,
    VendasComponent,
    MensagensComponent,
    RewardComponent,
    CreateComponent,
    FormComponent,
    ErrorMsgComponent,
    CriarProdutoComponent,
    FormProdutoComponent,
    EditarComponent,
    NotFoundComponent,
    FilterPipe,
    GetusuariosComponent,
    GetusuarioComponent,
    FormusuarioComponent,
    CriausuarioComponent,
    EditausuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
