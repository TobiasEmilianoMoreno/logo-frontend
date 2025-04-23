import { Component, input } from '@angular/core';
import { Building } from './building.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  building = input.required<Building>();
  
  icons = {
    bed: 'assets/images/bed.svg',
    bath: 'assets/images/bathroom.svg',
    size: 'assets/images/building-size.svg'
  };
}
