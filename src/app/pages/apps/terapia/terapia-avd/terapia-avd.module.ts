import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// servicios
import {PedaleraService} from '../../../../service/pedalera.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { ColorFadeModule } from '../../../../../@vex/pipes/color/color-fade.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TerapiaAvdComponent} from './terapia-avd.component';
import {DialogComponent} from './terapia-avd.component';
import {TerapiaAvdRoutingModule} from './terapia-avd-routing.module';
import { TerapiaAvdCreateUpdateComponent } from './terapia-avd-create-update/terapia-avd-create-update.component';
import {IconModule} from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MatCheckboxModule,
  MatDialogModule, MatDividerModule,
  MatPaginatorModule,
  MatTableModule,
  MatTooltipModule,
  MatMenuModule, MatSlideToggleModule
} from '@angular/material';
import {ReactiveFormsModule,  FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PageLayoutModule} from '../../../../../@vex/components/page-layout/page-layout.module';
import {BreadcrumbsModule} from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [TerapiaAvdComponent, DialogComponent, TerapiaAvdCreateUpdateComponent],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    MatInputModule,
    HttpClientModule,
    MatSlideToggleModule,
    CommonModule,
    TerapiaAvdRoutingModule,
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
    MatDialogModule, MatDialogModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    ColorFadeModule,
    MatButtonToggleModule,
    MatDividerModule,
  ],
  providers: [PedaleraService, DatePipe],
  entryComponents: [DialogComponent, TerapiaAvdCreateUpdateComponent],
  exports: [TerapiaAvdCreateUpdateComponent]
})
export class TerapiaAvdModule  {
}
