import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MarcaService } from './services/marca/marca.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/producto/product.service';
import { UnidadmedidaService } from './services/unidadMedida/unidadmedida.service';

@NgModule({
  declarations: [AppComponent, NavComponent, ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeComponent,
    HttpClientModule
  ],
  providers: [MarcaService, ProductService, UnidadmedidaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
