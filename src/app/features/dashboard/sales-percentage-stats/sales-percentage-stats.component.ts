import { Component } from '@angular/core';
import { SaleItem } from './sale-item.model';

@Component({
  selector: 'app-sales-percentage-stats',
  imports: [],
  templateUrl: './sales-percentage-stats.component.html',
  styleUrl: './sales-percentage-stats.component.scss',
})
export class SalesPercentageStatsComponent {
  selectedPeriod = 'Monthly';

  salesData: Record<string, SaleItem[]> = {
    Monthly: [
      { label: 'Via Website', value: 50 },
      { label: 'Via Team Member', value: 12 },
      { label: 'Via Agents', value: 6 },
      { label: 'Via Social Media', value: 15 },
      { label: 'Via Digital Marketing', value: 12 },
      { label: 'Via Others', value: 5 },
    ],
    Weekly: [
      { label: 'Via Website', value: 60 },
      { label: 'Via Team Member', value: 10 },
      { label: 'Via Agents', value: 8 },
      { label: 'Via Social Media', value: 12 },
      { label: 'Via Digital Marketing', value: 7 },
      { label: 'Via Others', value: 3 },
    ],
    Yearly: [
      { label: 'Via Website', value: 45 },
      { label: 'Via Team Member', value: 15 },
      { label: 'Via Agents', value: 10 },
      { label: 'Via Social Media', value: 18 },
      { label: 'Via Digital Marketing', value: 8 },
      { label: 'Via Others', value: 4 },
    ],
  };

  get sales(): SaleItem[] {
    return this.salesData[this.selectedPeriod] || [];
  }

  onPeriodChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedPeriod = select.value;
  }
}
