import { Component, Input } from '@angular/core';

interface DetailButton {
  type: string;
  label: string;
}

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() data: DetailButton = { type: 'button', label: 'Enviar' };

  constructor() {}
}
