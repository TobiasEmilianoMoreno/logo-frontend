import { Component, input } from '@angular/core';
import { TableColumn } from './table-column.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T extends Record<string, any> = Record<string, any>> {
  columns = input.required<TableColumn[]>();
  data = input.required<T[]>();

  isImageUrl(value: any): boolean {
    return (
      typeof value === 'string' &&
      /\.(jpg|png|gif|svg)$/i.test(value)
    );
  }
}
