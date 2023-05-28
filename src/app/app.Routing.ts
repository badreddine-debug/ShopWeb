import { CanActivate, RouterModule } from '@angular/router';
import { ListProduitComponent } from './Product/list-produit/list-produit.component';
import { AddProduitComponent } from './Product/add-produit/add-produit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './Service/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './Product/product/product.component';

const App_Routing = [
  {
    path: '',
    loadChildren: () =>
      import('./administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
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
  { path: '**', component: NotfoundComponent },
];

export const ROUTING = RouterModule.forRoot(App_Routing);
