import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalleNoticiaComponent } from './components/detalle-noticia/detalle-noticia.component';
import { ContableComponent } from './components/contable/contable.component';
import { JuridicaComponent } from './components/juridica/juridica.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { MenuNoticiasComponent } from './components/menu-noticias/menu-noticias.component';
import { authGuard } from './guards/auth.guard';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: HomeComponent, canActivate: [authGuard] },
    { path: 'noticias', component: DetalleNoticiaComponent },
    { path: 'juridica', component: JuridicaComponent },
    { path: 'contable', component: ContableComponent },
    { path: 'menu-noticias', component: MenuNoticiasComponent/*, canActivate: [authGuard] */ },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }