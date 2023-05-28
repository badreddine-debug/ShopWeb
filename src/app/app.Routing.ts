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
    path: '',
    loadChildren: () =>
      import('./Product/product.module').then((m) => m.ProductModule),
  },
  { path: '**', component: NotfoundComponent },
];

export const ROUTING = RouterModule.forRoot(App_Routing);
