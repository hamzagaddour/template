import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        loadChildren: () => import('./dash-default/dashPages/default/dash-default.module').then(module => module.DashDefaultModule)
      },
      {
        path : 'achat',
        loadChildren: () => import('./dash-default/dashPages/achat/achat.module').then(module => module.AchatModule)
      },
      {
        path : 'commerce',
        loadChildren: () => import('./dash-default/dashPages/commerce/commerce.module').then(module => module.CommerceModule)
      },
      {
        path : 'finance',
        loadChildren: () => import('./dash-default/dashPages/finance/finance.module').then(module => module.FinanceModule)
      },
      {
        path : 'gmo',
        loadChildren: () => import('./dash-default/dashPages/gmo/gmo.module').then(module => module.GmoModule)
      },

    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
