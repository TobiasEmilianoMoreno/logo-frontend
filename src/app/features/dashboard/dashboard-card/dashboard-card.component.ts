import { CurrencyPipe, isPlatformBrowser } from '@angular/common';
import { Component, inject, input, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  imports: [CurrencyPipe],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent implements OnInit {
  title = input.required<string>();
  value = input.required<number | string>();
  actionIcon = input.required<string>();
  actionAlt = input.required<string>();
  platformId = inject(PLATFORM_ID);

  displayValue: number | string = 0;

  ngOnInit(): void {
    const raw = this.value();
    const numericValue = typeof raw === 'number' ? raw : Number(raw);

    if (!isNaN(numericValue)) {
      if (isPlatformBrowser(this.platformId)) {
        this.animateValue(0, numericValue, 3000);
      } else {
        this.displayValue = numericValue;
      }
    } else {
      this.displayValue = raw;
    }
  }

  private animateValue(start: number, end: number, duration: number): void {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = this.easeOutQuad(progress);
      this.displayValue = Math.round(start + (end - start) * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.displayValue = end;
      }
    };

    requestAnimationFrame(step);
  }

  private easeOutQuad(t: number): number {
    return t * (2 - t);
  }
}
