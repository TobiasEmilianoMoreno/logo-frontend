import { Component } from '@angular/core';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { RevenueAnalyticsComponent } from '../charts/revenue-analytics/revenue-analytics.component';
import { SalesPercentageStatsComponent } from '../sales-percentage-stats/sales-percentage-stats.component';

@Component({
  selector: 'app-panel',
  imports: [
    DashboardCardComponent,
    RevenueAnalyticsComponent,
    SalesPercentageStatsComponent,
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  cards = [
    {
      title: 'Total Revenue',
      value: 45890,
      actionIcon: 'assets/dashboard/currency-usd.svg',
      actionAlt: 'dollar',
    },
    {
      title: 'Total Visitor',
      value: '2456',
      actionIcon: 'assets/dashboard/account-group-outline.svg',
      actionAlt: 'users',
    },
    {
      title: 'Total Properties',
      value: '358',
      actionIcon: 'assets/dashboard/home-city-outline.svg',
      actionAlt: 'home',
    },
    {
      title: 'Properties for Sell',
      value: '243',
      actionIcon: 'assets/dashboard/home-lightning-bolt-outline.svg',
      actionAlt: 'sale',
    },
    {
      title: 'Properties for Rent',
      value: '115',
      actionIcon: 'assets/dashboard/home-clock-outline.svg',
      actionAlt: 'sale',
    },
  ];
}
