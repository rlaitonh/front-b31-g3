import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './core/components/private/product/product-form/product-form.component';
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PrivateLayoutComponent } from './core/components/private/layout/private-layout/private-layout.component';
import { TopbarComponent } from './core/components/private/layout/topbar/topbar.component';
import { ProductListComponent } from './core/components/private/product/product-list/product-list.component';
import { SidebarComponent } from './core/components/private/layout/sidebar/sidebar.component';
import { InvoiceListComponent } from './core/components/private/invoice/invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './core/components/private/invoice/invoice-form/invoice-form.component';

import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    HomeComponent,
    NavbarComponent,
    PrivateLayoutComponent,
    TopbarComponent,
    SidebarComponent,
    ProductListComponent,
    InvoiceListComponent,
    InvoiceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Facilita la interaccion entre formulario y el contenido de la lógica del componente
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
