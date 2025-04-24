import { Routes } from '@angular/router';
import { HeroSectionComponent } from './features/hero-section/hero-section.component';

export const routes: Routes = [
  { path: 'home', component: HeroSectionComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
