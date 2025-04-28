import { Component, output } from '@angular/core';
import { SelectComponent } from '../../../../shared/components/select/select.component';

@Component({
  selector: 'app-search-bar',
  imports: [SelectComponent],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  tabChange = output<'rent' | 'buy'>();

  activeTab: 'rent' | 'buy' = 'rent';

  departamentos = ['Casa', 'Apartamento', 'Oficina', 'Local', 'Terreno'];
  ambientes = ['1', '2', '3', '4', '5+'];
  precios = [
    '$0 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $200,000',
    '$200,000+',
  ];

  selectedDepartamento = '';
  selectedAmbientes = '';
  selectedPrecio = '';

  onDepartamentoChange(value: string): void {
    this.selectedDepartamento = value;
    console.log('Departamento seleccionado:', value);
  }

  onAmbientesChange(value: string): void {
    this.selectedAmbientes = value;
    console.log('Ambientes seleccionados:', value);
  }

  onPrecioChange(value: string): void {
    this.selectedPrecio = value;
    console.log('Precio seleccionado:', value);
  }

  setActiveTab(tab: 'rent' | 'buy') {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }

  onSearch() {
    console.log('Realizando búsqueda...');
  }
}
