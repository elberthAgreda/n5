import { Component, Input } from '@angular/core';

interface DetailTitle {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() data: DetailTitle = { title: 'Title', subtitle: 'Subtitle' };

  constructor() {}
}
