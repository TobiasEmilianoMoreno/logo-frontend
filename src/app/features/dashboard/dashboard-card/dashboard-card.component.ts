import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  imports: [CurrencyPipe],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {
  title = input.required<string>();
  value = input.required<number | string>();
  actionIcon = input.required<string>();
  actionAlt = input.required<string>();
}
