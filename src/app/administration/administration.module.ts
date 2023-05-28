import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule, AdministrationRoutingModule, ReactiveFormsModule],
})
export class AdministrationModule {}
