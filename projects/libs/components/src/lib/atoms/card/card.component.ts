import { Component, Input } from '@angular/core';

interface DetailCard {
  id: string;
  image: string;
  name: string;
}

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: DetailCard[] = [];

  constructor() {}
}
