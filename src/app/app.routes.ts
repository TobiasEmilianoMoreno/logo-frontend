import { Routes } from '@angular/router';
import { HeroSectionComponent } from './features/hero-section/hero-section.component';
import { PanelComponent } from './features/dashboard/panel/panel.component';
import { LayoutComponent } from './features/dashboard/layout/layout.component';
export const routes: Routes = [
  { path: 'home', component: HeroSectionComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: 'cards',
        loadComponent: () =>
          import(
            './features/dashboard/dashboard-card/dashboard-card.component'
          ).then((m) => m.DashboardCardComponent),
      },
      { path: 'panel', component: PanelComponent },
      { path: '', redirectTo: 'cards', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
