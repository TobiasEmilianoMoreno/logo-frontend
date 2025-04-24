import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BenefitsSectionComponent } from '../benefits-section/benefits-section.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-hero-section',
  imports: [
    HeaderComponent,
    SearchBarComponent,
    BenefitsSectionComponent,
    FooterComponent,
  ],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  activeTab: 'buy' | 'rent' = 'rent';

  setActiveTab(tab: 'buy' | 'rent'): void {
    this.activeTab = tab;
  }
}
