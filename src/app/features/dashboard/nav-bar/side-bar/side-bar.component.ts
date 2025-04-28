import { Component, computed, inject } from '@angular/core';
import { MenuItem } from '../menuItem.model';
import { HttpClient } from '@angular/common/http';
import { SideBarService } from '../../../../shared/services/sider-bar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  menuItems: MenuItem[] = [];
  private http = inject(HttpClient);
  private sidebarService = inject(SideBarService);

  isOpen = computed(() => this.sidebarService.isOpen());

  ngOnInit(): void {
    this.http
      .get<MenuItem[]>('assets/dashboard/menu-items.json')
      .subscribe((data) => (this.menuItems = data));
  }

  onMenuClick() {
    this.sidebarService.close();
  }
}
