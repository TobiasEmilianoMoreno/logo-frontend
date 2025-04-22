import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  label = input.required<string>();
  options = input.required<string[]>();
  selectedOption = input.required<string>();
  selectionChange = output<string>();

  isOpen = signal(false);

  toggleDropdown(): void {
    this.isOpen.update((value) => !value);
  }

  selectOption(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectionChange.emit(select.value);
  }

  closeDropdown(): void {
    this.isOpen.set(false);
  }
}
