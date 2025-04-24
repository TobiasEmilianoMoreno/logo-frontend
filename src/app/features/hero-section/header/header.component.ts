import { Component, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { AuthMockComponent } from '../../auth-mock/auth-mock.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AuthMockComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isLoginModalOpen = signal(false);
  private platformId = inject(PLATFORM_ID);
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        if (this.isMenuOpen()) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });

      effect(() => {
        if (this.isLoginModalOpen()) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });
    }
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  openLoginModal() {
    this.isLoginModalOpen.set(true);
  }

  closeLoginModal() {
    this.isLoginModalOpen.set(false);
  }

  isLogedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('userLogedIn')) {
        return true;
      }
      return false;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('userLogedIn');
  }

  scrollToAnchor(anchor: string, event: Event) {
    event.preventDefault();
    this.viewportScroller.scrollToAnchor(anchor);
  }

  navigateTo(anchor: string, event: Event) {
    event.preventDefault();
    this.closeMenu();
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
