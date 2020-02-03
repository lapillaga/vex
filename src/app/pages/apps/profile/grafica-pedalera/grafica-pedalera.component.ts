import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import icGroup from '@iconify/icons-ic/twotone-group';
import icPageView from '@iconify/icons-ic/twotone-pageview';
import icCloudOff from '@iconify/icons-ic/twotone-cloud-off';
import icTimer from '@iconify/icons-ic/twotone-timer';
import { defaultChartOptions } from '../../../../../@vex/utils/default-chart-options';
import { Order, tableSalesData } from '../../../../../static-data/table-sales-data';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import theme from '../../../../../@vex/utils/tailwindcss';
import chart_line from '@iconify/icons-fa-solid/chart-line';
import {CajaAvdService} from '../../../../service/cajaAvd.service';
import {CajaAvd} from '../../../../models/cajaAvd.model';
import {Persona} from '../../../../models/persona.model';

@Component({
  selector: 'vex-grafica-pedalera',
  templateUrl: './grafica-pedalera.component.html',
  styleUrls: ['./grafica-pedalera.component.scss']
})
export class GraficaPedaleraComponent implements OnInit {
  tableColumns: TableColumn<Order>[] = [
    {
      label: '',
      property: 'status',
      type: 'badge'
    },
    {
      label: 'PRODUCT',
      property: 'name',
      type: 'text'
    },
    {
      label: '$ PRICE',
      property: 'price',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'DATE',
      property: 'timestamp',
      type: 'text',
      cssClasses: ['text-secondary']
    }
  ];
  tableData = tableSalesData;
  userSessionsSeries: ApexAxisChartSeries = [
    {
      name: 'Pedalera',
      data: [10, 50, 26, 50, 38, 60, 50, 25, 61, 80, 40, 60]
    },
    {
      name: 'Caja AVD',
      data: [5, 21, 42, 70, 41, 20, 35, 50, 10, 15, 30, 50]
    },
  ];
  pageViewsSeries: ApexAxisChartSeries = [{
    name: 'Repeticiones',
    data: [405, 800, 200, 600, 105, 788, 600, 204]
  }];

  uniqueUsersSeries: ApexAxisChartSeries = [{
    name: 'Repeticiones',
    data: [356, 806, 600, 754, 432, 854, 555, 1004]
  }];
  uniqueUsersOptions = defaultChartOptions({
    chart: {
      type: 'area',
      height: 100
    },
    colors: ['#ff9800']
  });

  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;
  chart_line = chart_line;
  cajaByAldaba: CajaAvd[];
  theme = theme;
  constructor(private cd: ChangeDetectorRef,
              private cajaService: CajaAvdService) { }

  ngOnInit() {
    this.getAldabas();
    setTimeout(() => {
      const temp = [
        {
          name: 'Subscribers',
          data: [55, 213, 55, 0, 213, 55, 33, 55]
        },
        {
          name: ''
        }
      ];
    }, 3000);
  }
  getAldabas() {
    this.cajaService.getCajaByAldaba().valueChanges().subscribe( value => {
      this.cajaByAldaba = value;
      console.log('miraaa');
      console.log(this.cajaByAldaba);
    });
  }

}
