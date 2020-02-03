import {Component, OnInit, ViewChild, OnDestroy, AfterViewInit, Input, Inject} from '@angular/core';
import {stagger40ms, stagger80ms} from '../../../../../@vex/animations/stagger.animation';
import {fadeInUp400ms} from '../../../../../@vex/animations/fade-in-up.animation';
import {scaleIn400ms} from '../../../../../@vex/animations/scale-in.animation';
import {fadeInRight400ms} from '../../../../../@vex/animations/fade-in-right.animation';
import {ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {Persona} from '../../../../models/persona.model';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icClose from '@iconify/icons-ic/twotone-close';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { FormControl } from '@angular/forms';
import {TableColumn} from '../../../../../@vex/interfaces/table-column.interface';
import { MatTableDataSource} from '@angular/material';
import { MatDialog , MAT_DIALOG_DATA ,  MatDialogRef } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import {PersonaService} from '../../../../service/persona.service';
import {PersonaGlobalService} from '../../../../service/persona-global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import eye from '@iconify/icons-fa-solid/eye';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { untilDestroyed } from 'ngx-take-until-destroy';
import {PersonaCreateUpdateComponent} from './persona-create-update/persona-create-update.component';


@Component({
  selector: 'vex-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]

})
export class ListarComponent implements OnInit, AfterViewInit, OnDestroy {
  icEdit = icEdit;
  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icAdd = icAdd;
  iceye = eye;
  icFilterList = icFilterList;
  icFolder = icFolder;
  @Input()
  columns: TableColumn<Persona>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Nombre y Apellido', property: 'nombre', type: 'text', visible: true },
    { label: 'Cédula', property: 'cedula', type: 'text', visible: true },
    { label: 'Edad', property: 'edad', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }

  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Persona> | null;
  persons: Persona[];
  selection = new SelectionModel<Persona>(true, []);
  searchCtrl = new FormControl();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(protected personService: PersonaService,
              private  personaGlobal: PersonaGlobalService,
              private snackbar: MatSnackBar,
              private dialog: MatDialog,
              private router: Router) { }


  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getPersonas();
    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
  getPersonas() {
    this.personService.getPersons()
      .snapshotChanges()
      .subscribe(item => {
        this.persons = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.persons.push(x as Persona);
          console.log(this.persons);
          this.dataSource.data = this.persons;
        });
      });
  }
  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  trackByProperty<T>(column: TableColumn<T>) {
    return column.property;
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  showNotification(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000
    });
  }
  createPersona() {
    this.dialog.open(PersonaCreateUpdateComponent,).afterClosed().subscribe((persona: Persona) => {
      if (persona) {
        if (this.personService.insertPerson(persona)) {
          this.showNotification('Antecedente creado EXITOSAMENTE', 'OK');
        } else {
          this.showNotification('ERROR al crear el Antecedente', 'CERRAR');
        }

      }
    });
  }
  updatePersona(persona) {
  }
  openPersona(persona) {
    console.log(persona);
    this.personaGlobal.savePersonaInstance(persona);
    this.router.navigate(['apps/profile']);
    this.snackbar.open('Continuará el archivo del paciente', 'Información', {
      duration: 10000
    });
  }
  ngOnDestroy() {
  }

}

@Component({
  selector: 'vex-components-dialog',
  template: `
      <div mat-dialog-title fxLayout="row" fxLayoutAlign="space-between center">
          <div>ALERTA</div>
          <button type="button" mat-icon-button (click)="close('null')" tabindex="-1">
              <mat-icon [icIcon]="icClose"></mat-icon>
            </button>
      </div>

      <mat-dialog-content>
          <p>{{message}}</p>
      </mat-dialog-content>


      <mat-dialog-actions align="end">
          <button mat-button (click)="close('no')">NO</button>
          <button mat-button color="primary" (click)="close('si')">SI</button>
      </mat-dialog-actions>
  `
})

export class DialogComponent {

  icClose = icClose;
  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<DialogComponent>) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }

  ngOnInit() {
    this.message = this.defaults
  }


}
