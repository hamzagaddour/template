import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FianceRoutingModule} from './finance.routing.module';
import { FinanceComponent } from './finance.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';


@NgModule({
  declarations: [FinanceComponent],
  imports: [
    CommonModule,
    FianceRoutingModule,
    SharedModule
  ]
})
export class FinanceModule { }
