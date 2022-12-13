import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Magacin903Component } from './components/magacin903/magacin903.component';
import { Magacin904Component } from './components/magacin904/magacin904.component';
import { ProveraTrebovanjaIzvozaComponent } from './components/provera-trebovanja-izvoza/provera-trebovanja-izvoza.component';
import { TrebovanjeIzvozaComponent } from './components/trebovanje-izvoza/trebovanje-izvoza.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '903', component: Magacin903Component},
  {path: '904', component: Magacin904Component},
  {path: 'trebovanje-izvoza', component: TrebovanjeIzvozaComponent},
  {path: 'provera-trebovanja-izvoza', component: ProveraTrebovanjaIzvozaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
