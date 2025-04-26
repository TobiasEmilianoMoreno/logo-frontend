import { Component, inject } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarService } from '../../../shared/services/sider-bar.service';
@Component({
  selector: 'app-nav-bar',
  imports: [SideBarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  private sidebarService = inject(SideBarService);

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
