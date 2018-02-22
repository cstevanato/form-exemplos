import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormImputExemploComponent } from './form-imput-exemplo/form-imput-exemplo.component';
import { FormListaExemploComponent } from './form-lista-exemplo/form-lista-exemplo.component';

const routes: Routes = [
  { path: 'Input Ex.', component: FormImputExemploComponent },
  { path: 'Lista Ex.', component: FormListaExemploComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashbord' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
