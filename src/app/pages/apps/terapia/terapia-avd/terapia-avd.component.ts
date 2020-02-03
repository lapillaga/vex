import {AfterViewInit, Component, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {stagger40ms, stagger80ms} from '../../../../../@vex/animations/stagger.animation';
import {fadeInUp400ms} from '../../../../../@vex/animations/fade-in-up.animation';
import { SelectionModel } from '@angular/cdk/collections';

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
import {
  MAT_DIALOG_DATA,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatDialog, MatDialogRef,
  MatFormFieldDefaultOptions,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {CajaAvd} from '../../../../models/cajaAvd.model';
import {CajaAvdService} from '../../../../service/cajaAvd.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {TerapiaAvdCreateUpdateComponent} from './terapia-avd-create-update/terapia-avd-create-update.component';


@Component({
  selector: 'vex-terapia-avd',
  templateUrl: './terapia-avd.component.html',
  styleUrls: ['./terapia-avd.component.scss'],
  animations: [
    stagger40ms,
    fadeInUp400ms,
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

export class TerapiaAvdComponent implements OnInit , AfterViewInit, OnDestroy {

  icEdit = icEdit;
  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icFolder = icFolder;
  @Input()
  columns: TableColumn<CajaAvd>[] = [
    {label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true},
    {label: 'Código de Persona', property: 'codigo', type: 'text', visible: true},
    {label: 'Ejercicio', property: 'ejercicio', type: 'text', visible: true},
    {label: 'Desarrollo', property: 'ejercitaciones', type: 'text', visible: true},
    {label: 'Fecha', property: 'fecha', type: 'text', visible: true},
    {label: 'Actions', property: 'actions', type: 'button', visible: true}
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<CajaAvd> | null;
  cajasAvd: CajaAvd[];
  selection = new SelectionModel<CajaAvd>(true, []);
  searchCtrl = new FormControl();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(protected cajaAvdService: CajaAvdService,
              private snackbar: MatSnackBar,
              private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getCajas();
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

  getCajas() {
    this.cajaAvdService.getCajas()
      .snapshotChanges()
      .subscribe(item => {
        this.cajasAvd = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x["$key"]  = element.key;
          this.cajasAvd.push(x as CajaAvd);
          console.log(this.cajasAvd);
          this.dataSource.data = this.cajasAvd;
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

  createCajaAvd() {
    this.dialog.open(TerapiaAvdCreateUpdateComponent).afterClosed().subscribe((caja: CajaAvd) => {
      if (caja) {
        if (this.cajaAvdService.insertCaja(caja)) {
          this.showNotification('Terapia creado EXITOSAMENTE', 'OK');
        } else {
          this.showNotification('ERROR al crear el Terapia', 'CERRAR');
        }

      }
    });
  }

  updateCaja(caja: CajaAvd) {
    console.log(caja);
    this.dialog.open(TerapiaAvdCreateUpdateComponent, {
      data: caja
    }).afterClosed().subscribe(updated => {
      const id = caja.$key;
      console.log(id);
      if (updated) {
        if (this.cajaAvdService.updateCaja(updated, id)) {
          this.ngOnInit();
          this.showNotification('Registro actualizado exitosamente', 'Ok');
        }
      }
    });
  }

  ngOnDestroy() {
  }

  openDialog(listCajas?: CajaAvd[], cajaAvd?: CajaAvd) {
    let message = 'Estas seguro de eliminar este registro?';
    if (cajaAvd) {
      listCajas = new Array<CajaAvd>();
      listCajas.push(cajaAvd);
    } else if (listCajas.length > 1) {
      message = 'Estas seguro de eliminar ' + listCajas.length + ' registros?';
 }

    this.dialog.open(DialogComponent, {
      data: message,
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      if (result === 'si') {
        this.delateCaja(listCajas);
      }
    });
  }

  delateCaja(cajas: CajaAvd[]) {
    const tamaño = cajas.length;
    const promise = new Promise((resolve, reject) => {
      cajas.forEach(caja => {
        const id = caja.$key;
        if (this.cajaAvdService.deleteCaja(id)) {
          this.selection.deselect(caja);
          this.dataSource.connect().next(this.cajasAvd);
        }
      });
      resolve();
    });
    promise.then(() => {
      this.selection.clear();
      if (tamaño > 1) {
        this.showNotification('Registros eliminados exitosamente', 'Ok');
      } else {
        this.showNotification('Registro eliminado exitosamente', 'Ok');
      }
    });
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

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.message = this.defaults;
  }
}
