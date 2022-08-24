import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../../../theme/shared/shared.module';


import { CommerceRoutingModule } from './commerce.routing.module';
import { CommerceComponent } from './commerce.component';

@NgModule({
  declarations : [CommerceComponent],
  imports : [
    CommonModule,
    CommerceRoutingModule,
    SharedModule
  ]
})

export class CommerceModule {}
