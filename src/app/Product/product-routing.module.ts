import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../Service/auth.guard';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'Home',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Product',
        component: ProductComponent,
        children: [
          {
            path: '',
            component: ListProduitComponent,
          },
          {
            path: 'Add',
            component: AddProduitComponent,
          },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
