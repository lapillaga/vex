import { Component, Input, OnInit } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { ApexOptions } from '../../../../../@vex/components/chart/chart.component';
import { defaultChartOptions } from '../../../../../@vex/utils/default-chart-options';
import { createDateArray } from '../../../../../@vex/utils/create-date-array';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DateTime} from 'luxon';
import {createDate} from '.././funcion';


@Component({
  selector: 'vex-widget-grafico-pedalera',
  templateUrl: './widget-grafico-pedalera.component.html',
  styleUrls: ['./widget-grafico-pedalera.component.scss']
})
export class WidgetGraficoPedaleraComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    fechaInicio  : ['', Validators.required],
    fechaFin:  ['', Validators.required]
  });
  searchCtrl = new FormControl();
  fechaFinControl = new FormControl();
  maxDate: Date;
  @Input() series: ApexNonAxisChartSeries | ApexAxisChartSeries;
  @Input() options: ApexOptions = defaultChartOptions({
    grid: {
      show: true,
      strokeDashArray: 3,
      padding: {
        left: 16
      }
    },
    chart: {
      type: 'area',
      height: 384,
      sparkline: {
        enabled: false
      },
      zoom: {
        enabled: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    colors: ['#008ffb', '#ff9800'],
    labels: createDateArray(12),
    xaxis: {
      type: 'datetime',
      labels: {
        show: true
      },
    },
    yaxis: {
      labels: {
        show: true
      }
    },
    legend: {
      show: true,
    }
  });

  icMoreHoriz = icMoreHoriz;
  icCloudDownload = icCloudDownload;

  constructor( private fb: FormBuilder ) {
    console.log(this.searchCtrl.status);
  }

  ngOnInit() {
    console.log(this.searchCtrl.status);

    // this.searchCtrl.valueChanges.pipe()
    //   .subscribe((value: any) => {
    //       console.log(value);
    //       if(value){
    //         console.log('ture');
    //         const date = this.myForm.get('fechaInicio').value;
    //         this.maxDate = new Date(date.getFullYear() , date.getMonth()  , date.getDate());
    //         console.log('hhhh')
    //         console.log( this.maxDate);
    //         console.log(this.myForm.get('fechaInicio').value);
    //       }
    //   }
    //   );
  }

  buscar() {
    const date = this.myForm.get('fechaInicio').value;
    this.maxDate = new Date(date.getFullYear() , date.getMonth()  , date.getDate());
    console.log('hhhh')
    console.log( this.maxDate);
    console.log( this.myForm.get('fechaInicio').value.getDate());
    console.log(this.myForm.get('fechaInicio').value);


  }

}
