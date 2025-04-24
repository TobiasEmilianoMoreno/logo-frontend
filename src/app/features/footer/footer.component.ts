import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  private viewportScroller = inject(ViewportScroller);

  scrollToAnchor(anchor: string, event: Event) {
    event.preventDefault();
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
