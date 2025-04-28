import { Component, input } from '@angular/core';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-benefits-section',
  imports: [ CarouselComponent],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
})
export class BenefitsSectionComponent {
  activeTab = input<'buy' | 'rent'>('buy');

  features = [
    {
      icon: 'shield.svg',
      title: 'Seguridad y Tranquilidad',
      description: 'Tu seguridad y la de tu familia',
    },
    {
      icon: 'money-pig.svg',
      title: 'Transparencia Total',
      description: 'Procesos claros y transparentes',
    },
    {
      icon: 'Handshake.svg',
      title: 'Soporte 24/7',
      description: 'Estamos para ayudarte siempre',
    },
    {
      icon: 'Home.svg',
      title: 'Calidad Garantizada',
      description: 'Las mejores propiedades verificadas',
    },
  ];
}
