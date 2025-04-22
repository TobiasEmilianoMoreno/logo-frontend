import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-hero-section',
  imports: [ HeaderComponent, SearchBarComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  activeTab: 'buy' | 'rent' = 'buy';

  setActiveTab(tab: 'buy' | 'rent'): void {
    this.activeTab = tab;
  }
}
