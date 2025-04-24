import { Routes } from '@angular/router';
import { HeroSectionComponent } from './features/hero-section/hero-section.component';
import { NavBarComponent } from './features/dashboard/nav-bar/nav-bar.component';
export const routes: Routes = [
  { path: 'home', component: HeroSectionComponent },
  { path: 'dashboard', component: NavBarComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
