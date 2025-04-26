import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarService } from '../../../shared/services/sider-bar.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from "../../../features/dashboard/footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [NavBarComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private sidebarService = inject(SideBarService);
  readonly isOpen = computed(() => this.sidebarService.isOpen());
}
