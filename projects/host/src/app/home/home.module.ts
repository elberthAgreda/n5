import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'projects/libs/components/src/public-api';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TranslateModule, ButtonModule, HomeRoutingModule],
})
export class HomeModule {}
