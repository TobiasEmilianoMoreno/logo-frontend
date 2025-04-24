import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  inject,
  viewChild,
  input,
  effect,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Building } from '../card/building.model';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  imports: [CardComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  buildings = <Building[]>[];
  filterType = input<'department' | 'building'>('department');
  activeTab = input<'buy' | 'rent'>('rent');

  currentPage = 0;
  itemsPerPage = 4;
  private allBuildings: Building[] = [];

  private carouselRef = viewChild<ElementRef>('carouselRef');
  private resizeObserver: ResizeObserver | null = null;
  private platformId: Object = inject(PLATFORM_ID);
  private isBrowser: boolean = isPlatformBrowser(this.platformId);
  private http = inject(HttpClient);

  constructor() {
    effect(() => {
      const tab = this.activeTab();
      this.reloadBuildings();
    });
  }

  ngOnInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.setupResizeObserver();
        this.updateItemsPerPage(window.innerWidth);
      });
      this.loadAndFilterBuildings();
    }
  }

  private loadAndFilterBuildings() {
    this.http.get<Building[]>('assets/mock.json').subscribe((buildings) => {
      this.allBuildings = buildings;
      this.buildings = this.filterBuildings(buildings);
      this.currentPage = 0;
    });
  }

  private filterBuildings(buildings: Building[]): Building[] {
    let filteredBuildings = buildings;

    if (this.activeTab() === 'rent') {
      filteredBuildings = buildings.filter((building) => !building.sale);
    } else {
      filteredBuildings = buildings.filter((building) => building.sale);
    }

    if (this.filterType() === 'department') {
      return filteredBuildings.filter(
        (building) => building.beds !== null && building.bathrooms !== null
      );
    } else {
      return filteredBuildings.filter(
        (building) => building.floors !== null && building.status !== null
      );
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private setupResizeObserver() {
    if (!this.carouselRef()?.nativeElement) return;

    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        this.updateItemsPerPage(width);
      }
    });

    this.resizeObserver.observe(this.carouselRef()?.nativeElement);
  }

  private updateItemsPerPage(width: number) {
    if (width <= 600) {
      this.itemsPerPage = 1;
    } else if (width <= 900) {
      this.itemsPerPage = 2;
    } else if (width <= 1200) {
      this.itemsPerPage = 3;
    } else {
      this.itemsPerPage = 4;
    }

    const maxPage = Math.ceil(this.buildings.length / this.itemsPerPage) - 1;
    if (this.currentPage > maxPage) {
      this.currentPage = maxPage;
    }
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.buildings.length / this.itemsPerPage)).fill(0);
  }

  get visibleBuildings(): Building[] {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.buildings.slice(start, end);
  }

  goToPage(pageIndex: number) {
    if (pageIndex >= 0 && pageIndex < this.totalPages.length) {
      this.currentPage = pageIndex;
    }
  }

  reloadBuildings() {
    if (this.allBuildings.length > 0) {
      this.buildings = this.filterBuildings(this.allBuildings);
      this.currentPage = 0;
    } else {
      this.loadAndFilterBuildings();
    }
  }
}
