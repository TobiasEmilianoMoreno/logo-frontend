import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarService } from '../../../shared/services/sider-bar.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-layout',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private sidebarService = inject(SideBarService);
  readonly isOpen = computed(() => this.sidebarService.isOpen());
}
