import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Magacin904Component } from './components/magacin904/magacin904.component';
import { Magacin903Component } from './components/magacin903/magacin903.component';
import { TrebovanjeIzvozaComponent } from './components/trebovanje-izvoza/trebovanje-izvoza.component';
import { HomeComponent } from './components/home/home.component';
import { ProveraTrebovanjaIzvozaComponent } from './components/provera-trebovanja-izvoza/provera-trebovanja-izvoza.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavbarComponent,
    Magacin904Component,
    Magacin903Component,
    TrebovanjeIzvozaComponent,
    HomeComponent,
    ProveraTrebovanjaIzvozaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
