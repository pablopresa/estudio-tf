import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContableComponent } from './components/contable/contable.component';
import { JuridicaComponent } from './components/juridica/juridica.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'juridica', component: JuridicaComponent },
    { path: 'contable', component: ContableComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }