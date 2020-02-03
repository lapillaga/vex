import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WidgetGraficoPedaleraComponent} from './widget-grafico-pedalera.component';
import {MatButtonModule, MatIconModule, MatNativeDateModule} from '@angular/material';
import {IconModule} from '@visurel/iconify-angular';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChartModule} from '../../../../../@vex/components/chart/chart.module';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {MatSlideToggleModule} from '@angular/material';
import {WidgetQuickLineChartModule} from '../../../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module';

@NgModule({
  declarations: [WidgetGraficoPedaleraComponent],
  imports: [MatSlideToggleModule,
    MatNativeDateModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    IconModule,
    FlexLayoutModule,
    ChartModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,

  ],
  exports: [WidgetGraficoPedaleraComponent]
})
export class WidgetGraficoPedaleraModule { }
