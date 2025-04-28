import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  private isOpenSignal = signal(false);
  isOpen = this.isOpenSignal.asReadonly();

  toggle() {
    this.isOpenSignal.update((prev) => !prev);
  }

  close() {
    this.isOpenSignal.set(false);
  }

  open() {
    this.isOpenSignal.set(true);
  }
}
