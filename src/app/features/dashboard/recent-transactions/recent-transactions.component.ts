import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';
import { Transaction } from './transaction.model';

@Component({
  selector: 'app-recent-transactions',
  imports: [TableComponent],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.scss',
})
export class RecentTransactionsComponent {
  transactions: Transaction[] = [
    {
      id: 1,
      imageUrl: 'assets/dashboard/house-1.jpg',
      date: '10th Aug 2023',
      name: 'Mr. Rocky',
      price: 12450,
      type: 'Rent',
      status: 'Paid',
    },
    {
      id: 2,
      imageUrl: 'assets/dashboard/house-2.jpg',
      date: '10th Aug 2023',
      name: 'Mr. Cristino',
      price: 12450,
      type: 'Sell',
      status: 'Unpaid',
    },
    {
      id: 3,
      imageUrl: 'assets/dashboard/house-3.jpg',
      date: '10th Aug 2023',
      name: 'Mr. Jack',
      price: 12450,
      type: 'Sell',
      status: 'Paid',
    },
    {
      id: 4,
      imageUrl: 'assets/dashboard/house-4.jpg',
      date: '10th Aug 2023',
      name: 'Ms. Cally',
      price: 12450,
      type: 'Sell',
      status: 'Unpaid',
    },
    {
      id: 5,
      imageUrl: 'assets/dashboard/house-5.jpg',
      date: '10th Aug 2023',
      name: 'Ms. Cristina',
      price: 12450,
      type: 'Rent',
      status: 'Unpaid',
    }
  ];
}
