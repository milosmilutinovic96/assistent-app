import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { TabelaNedostupnihArtikalaComponent } from './tabela-nedostupnih-artikala/tabela-nedostupnih-artikala.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    TabelaNedostupnihArtikalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
