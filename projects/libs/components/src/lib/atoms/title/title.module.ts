import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TitleComponent } from './title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TitleComponent],
})
export class TitleModule {}
