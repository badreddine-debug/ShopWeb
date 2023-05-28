import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListProduitComponent } from './Product/list-produit/list-produit.component';
import { AddProduitComponent } from './Product/add-produit/add-produit.component';
import { UpdateProduitComponent } from './Product/update-produit/update-produit.component';
import { ROUTING } from './app.Routing';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BtnCellRendererComponent } from './btn-cell-renderer/btn-cell-renderer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './Service/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './Product/product/product.component';
import { SearchProduitComponent } from './Product/search-produit/search-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProduitComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    GridComponent,
    BtnCellRendererComponent,
    NotfoundComponent,
    DashboardComponent,
    ProductComponent,
    SearchProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    AgGridModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
