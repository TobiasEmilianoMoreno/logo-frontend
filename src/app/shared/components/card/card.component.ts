import { Component } from '@angular/core';
import { Building } from './building.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  building: Building = {
    id: 1,
    name: 'Departamento Moderno',
    type: {
      id: 1,
      name: 'Departamento',
    },
    price: 800,
    beds: 2,
    bathrooms: 1,
    size: 60,
    direction: 'Av. Los álamos 1440 Rosario',
    image: 'assets/images/carrusel-dept.jpeg',
  };

  icons = {
    bed: 'assets/images/bed.svg',
    bath: 'assets/images/bathroom.svg',
    size: 'assets/images/building-size.svg'
  };
}
