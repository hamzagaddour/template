import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GmoComponent } from './gmo.component';

const routes: Routes = [
  {
    path: '',
    component: GmoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GmoRoutingModule { }
