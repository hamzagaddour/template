import { AchatComponent } from './achat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchatRoutingModule } from './achat.routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations : [AchatComponent],
  imports : [
    CommonModule,
    AchatRoutingModule,
    SharedModule

  ]
})

export class AchatModule {}
