import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaNedostupnihArtikalaComponent } from './tabela-nedostupnih-artikala/tabela-nedostupnih-artikala.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  {path: 'nedostupni-artikli', component: TabelaNedostupnihArtikalaComponent},
  {path: 'tabela/:tip', component: TabelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
