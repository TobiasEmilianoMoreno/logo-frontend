import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';

import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GeoComponent,
  GeoComponentOption,
} from 'echarts/components';
import { ScatterChart, ScatterSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { HttpClient } from '@angular/common/http';

echarts.use([TooltipComponent, GeoComponent, ScatterChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GeoComponentOption | ScatterSeriesOption
>;

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  @ViewChild('chart', { static: true })
  private chartDom!: ElementRef<HTMLDivElement>;
  private chart!: echarts.ECharts;
  private http: HttpClient = inject(HttpClient);

  private locations = [
    { name: 'Canada', value: [-106.0, 56.0], selected: false },
    { name: 'Palestina', value: [35.0, 32.0], selected: true },
    { name: 'Groenlandia', value: [-42.0, 61.0], selected: false },
    { name: 'Rusia', value: [105.0, 61.5], selected: true },
  ];

  ngAfterViewInit(): void {
    this.chart = echarts.init(this.chartDom.nativeElement);
    this.chart.showLoading();

    this.http.get<any>('/assets/map/world.json').subscribe((worldJson) => {
      echarts.registerMap('world', worldJson as any);

      this.initChart();
      this.attachClickHandler();

      this.chart.hideLoading();
    });
  }

  private initChart(): void {
    const option: EChartsOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
      },
      geo: {
        map: 'world',
        roam: false,
        itemStyle: {
          areaColor: '#f5f5f5',
          borderColor: '#ddd',
        },
      },
      series: [
        {
          id: 'points',
          name: 'Ubicaciones',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 12,
          label: {
            show: true,
            formatter: '{b}',
            position: 'right',
            distance: 5,
            fontSize: 12,
            color: '#333',
          },
          data: this.buildSeriesData(),
        },
      ],
    };

    this.chart.setOption(option);
  }

  private buildSeriesData() {
    return this.locations.map((loc) => ({
      name: loc.name,
      value: loc.value,
      itemStyle: {
        color: loc.selected ? 'gray' : 'green',
        borderColor: '#fff',
        borderWidth: 1,
      },
    }));
  }

  private attachClickHandler(): void {
    this.chart.on('click', (params) => {
      if (params.seriesId === 'points') {
        const idx = params.dataIndex as number;
        this.locations[idx].selected = !this.locations[idx].selected;
        this.chart.setOption({
          series: [
            {
              id: 'points',
              data: this.buildSeriesData(),
            },
          ],
        });
      }
    });
  }
}
