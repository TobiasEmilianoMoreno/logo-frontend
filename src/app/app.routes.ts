import { Routes } from '@angular/router';
import { HeroSectionComponent } from './features/hero-section/hero-section.component';
import { PanelComponent } from './features/dashboard/panel/panel.component';
import { LayoutComponent } from './features/dashboard/layout/layout.component';
import { authGuard } from './core/guards/auth.guard';
export const routes: Routes = [
  { path: 'home', component: HeroSectionComponent },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'cards',
        loadComponent: () =>
          import(
            './features/dashboard/dashboard-card/dashboard-card.component'
          ).then((m) => m.DashboardCardComponent),
      },
      {
        path: 'panel',
        loadComponent: () =>
          import('./features/dashboard/panel/panel.component').then(
            (m) => m.PanelComponent
          ),
      },
      { path: '', redirectTo: 'panel', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
