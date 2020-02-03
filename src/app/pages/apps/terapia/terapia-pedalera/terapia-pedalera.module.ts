import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

// servicios
import {PedaleraService} from '../../../../service/pedalera.service';

import { TerapiaPedaleraRoutingModule } from './terapia-pedalera-routing.module';
import {DialogPedaleraComponent, TerapiaPedaleraComponent} from './terapia-pedalera.component';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { ColorFadeModule } from '../../../../../@vex/pipes/color/color-fade.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TerapiaPedaleraCreateUpdateComponent } from './terapia-pedalera-create-update/terapia-pedalera-create-update.component';
import {
  MatCheckboxModule,
  MatDialogModule, MatDividerModule,
  MatPaginatorModule,
  MatTableModule,
  MatTooltipModule,
  MatMenuModule, MatSlideToggleModule
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [TerapiaPedaleraComponent, TerapiaPedaleraCreateUpdateComponent, DialogPedaleraComponent],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatTabsModule,
    MatSlideToggleModule,
    CommonModule,
    TerapiaPedaleraRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    ColorFadeModule,
    MatButtonToggleModule,
    MatDividerModule
  ],
  providers: [PedaleraService, DatePipe],
  entryComponents: [DialogPedaleraComponent, TerapiaPedaleraCreateUpdateComponent],
  exports: [TerapiaPedaleraCreateUpdateComponent]
})
export class TerapiaPedaleraModule {
}
