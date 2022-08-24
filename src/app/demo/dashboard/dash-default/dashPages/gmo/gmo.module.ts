import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GmoRoutingModule } from './gmo.routing.module';
import { GmoComponent } from './gmo.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';


@NgModule({
  declarations: [GmoComponent],
  imports: [
    CommonModule,
    GmoRoutingModule,
    SharedModule
  ]
})
export class GmoModule { }
