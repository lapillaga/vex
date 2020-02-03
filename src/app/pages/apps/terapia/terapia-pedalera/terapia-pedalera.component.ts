import {AfterViewInit, Component, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {stagger40ms, stagger80ms} from '../../../../../@vex/animations/stagger.animation';
import {fadeInUp400ms} from '../../../../../@vex/animations/fade-in-up.animation';
import {scaleIn400ms} from '../../../../../@vex/animations/scale-in.animation';
import {fadeInRight400ms} from '../../../../../@vex/animations/fade-in-right.animation';
import {ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
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
  MAT_FORM_FIELD_DEFAULT_OPTIONS, MatDialog, MatFormFieldDefaultOptions,
  MatTableDataSource, MatPaginator,
  MatSort, MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {Pedalera} from '../../../../models/pedalera.model';
import {PedaleraService} from '../../../../service/pedalera.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {TerapiaAvdCreateUpdateComponent} from '../terapia-avd/terapia-avd-create-update/terapia-avd-create-update.component';
import {CajaAvd} from '../../../../models/cajaAvd.model';
import {TerapiaPedaleraCreateUpdateComponent} from './terapia-pedalera-create-update/terapia-pedalera-create-update.component';
import {DialogComponent} from '../terapia-avd/terapia-avd.component';


@Component({
  selector: 'vex-terapia-pedalera',
  templateUrl: './terapia-pedalera.component.html',
  styleUrls: ['./terapia-pedalera.component.scss'],
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
export class TerapiaPedaleraComponent implements OnInit , AfterViewInit, OnDestroy {
  selection = new SelectionModel<Pedalera>(true, []);
  searchCtrl = new FormControl();
  icEdit = icEdit;
  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icFolder = icFolder;
  columns: TableColumn<Pedalera>[] = [
    {label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true},
    { label: 'Codigo de la Persona', property: 'codigo', type: 'text', visible: true },
    { label: 'Pedaleadas', property: 'pedaleadas', type: 'text', visible: true },
    { label: 'Fecha', property: 'fecha', type: 'text', visible: true },
    {label: 'Actions', property: 'actions', type: 'button', visible: true}
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Pedalera> | null;
  pedaleras: Pedalera[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(protected pedaleraService: PedaleraService,
              private snackbar: MatSnackBar,
              private dialog: MatDialog,
              private router: Router) {
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getPedaleras();
    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));

  }
  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getPedaleras() {
    this.pedaleraService.getPedaleras()
      .snapshotChanges()
      .subscribe(item => {
        this.pedaleras = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.pedaleras.push(x as Pedalera);
          console.log(this.pedaleras);
          this.dataSource.data = this.pedaleras;
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
  createPedalera() {
    this.dialog.open(TerapiaPedaleraCreateUpdateComponent,
     ).afterClosed().subscribe((pedalera: Pedalera) => {
      if (pedalera) {
        if (this.pedaleraService.insertCaja(pedalera)) {
          this.showNotification('Terapia creado EXITOSAMENTE', 'OK');
        } else {
          this.showNotification('ERROR al crear el Terapia', 'CERRAR');
        }

      }
    });
  }
  updatePedalera(pedalera: Pedalera) {
    this.dialog.open(TerapiaAvdCreateUpdateComponent, {
      data: pedalera
    }).afterClosed().subscribe(updated => {
      const id = pedalera.$key;
      if (updated) {
        if (this.pedaleraService.updatePedalera(updated, id)) {
          this.ngOnInit();
          this.showNotification('Registro actualizado exitosamente', 'Ok');
        }
      }
    });
  }
  ngOnDestroy() {
  }
  openDialog(listPedalera?: Pedalera[], pedalera?: Pedalera) {
    let message = 'Estas seguro de eliminar este registro?';
    if (pedalera) {
      listPedalera = new Array<Pedalera>();
      listPedalera.push(pedalera);
    } else if (listPedalera.length > 1) {
      message = 'Estas seguro de eliminar ' + listPedalera.length + ' registros?';
    }

    this.dialog.open(DialogPedaleraComponent, {
      data: message,
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      if (result === 'si') {
        this.delatePedalera(listPedalera);
      }
    });
  }
  delatePedalera(pedaleras: Pedalera[]) {
    const tamaño = pedaleras.length;
    const promise = new Promise((resolve, reject) => {
      pedaleras.forEach(pedalera => {
        const id = pedalera.$key;
        console.log(id);
        if (this.pedaleraService.deletePedalera(id)) {
          this.selection.deselect(pedalera);
          console.log('dnd')
          this.dataSource.connect().next(this.pedaleras);
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

export class DialogPedaleraComponent implements OnInit {

  icClose = icClose;
  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<DialogPedaleraComponent>) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }

  ngOnInit() {
    this.message = this.defaults;
  }


}



