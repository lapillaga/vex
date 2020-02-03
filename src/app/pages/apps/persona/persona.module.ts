import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import {DialogComponent, ListarComponent} from './listar/listar.component';
import { PersonaCreateUpdateComponent } from './listar/persona-create-update/persona-create-update.component';
import {IconModule} from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';
import {PageLayoutModule} from '../../../../@vex/components/page-layout/page-layout.module';
import {BreadcrumbsModule} from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatDividerModule,
  MatGridListModule,
  MatPaginatorModule,
  MatTableModule,
  MatTooltipModule,
  MatMenuModule
} from '@angular/material';
import {ReactiveFormsModule,  FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material';




@NgModule({
  declarations: [ListarComponent, PersonaCreateUpdateComponent, DialogComponent],
  imports: [
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatStepperModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CommonModule,
    MatInputModule,
    PersonaRoutingModule,
    MatMenuModule,
    IconModule,
    MatIconModule,
    PageLayoutModule,
    BreadcrumbsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule, MatDividerModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule
  ],
  entryComponents: [ DialogComponent, PersonaCreateUpdateComponent],
  exports: [PersonaCreateUpdateComponent]
})
export class PersonaModule { }
