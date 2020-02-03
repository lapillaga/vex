import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ruta
// servicio
import {PersonaService} from '../../../service/persona.service';
// component
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { GraficaPedaleraComponent } from './grafica-pedalera/grafica-pedalera.component';
import { ChartModule } from '../../../../@vex/components/chart/chart.module';
import { WidgetLargeChartModule } from '../../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import {WidgetGraficoPedaleraModule} from './widget-grafico-pedalera/widget-grafico-pedalera.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {WidgetQuickLineChartModule} from '../../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module';
@NgModule({
  declarations: [ProfileComponent, GraficaPedaleraComponent],
  imports: [
    WidgetQuickLineChartModule,
    BreadcrumbsModule,
    ReactiveFormsModule,
    ContainerModule,
    WidgetGraficoPedaleraModule,
    ChartModule,
    CommonModule,
    ProfileRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatTabsModule,
    IconModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    PersonaService
  ],
})
export class ProfileModule {
}
