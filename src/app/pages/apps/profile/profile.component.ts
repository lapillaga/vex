import {Component, OnInit, AfterViewInit, OnDestroy, ViewChild, Input} from '@angular/core';

import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';

import { MatDialog } from '@angular/material/dialog';
import icMail from '@iconify/icons-ic/twotone-mail';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icAdd from '@iconify/icons-ic/twotone-add';
import icj from '@iconify/icons-ic/3d-rotation';
import icWhatshot from '@iconify/icons-ic/twotone-whatshot';
import icWork from '@iconify/icons-ic/twotone-work';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icCheck from '@iconify/icons-ic/twotone-check';
import icPerson from '@iconify/icons-ic/person';
import icCedula from '@iconify/icons-fa-solid/address-card';
import icNacimiento from '@iconify/icons-fa-solid/birthday-cake';
import icSexo from '@iconify/icons-fa-solid/transgender-alt';
import icCivil from '@iconify/icons-fa-solid/heart';
import icSangre from '@iconify/icons-fa-solid/syringe';
import icLateralidad from '@iconify/icons-fa-solid/arrows-alt-h';
import icTransfucion from '@iconify/icons-fa-solid/heartbeat';
import icInstruccion from '@iconify/icons-fa-solid/poll';
import icProfesion from '@iconify/icons-fa-solid/chalkboard-teacher';
import icAsosiacion from '@iconify/icons-fa-solid/share-alt';
import icSalud from '@iconify/icons-fa-solid/ambulance';
import icVinculado from '@iconify/icons-fa-solid/check';
import icActivo from '@iconify/icons-fa-solid/user-check';
import icNacionalidad from '@iconify/icons-fa-solid/flag';
import icfingerprint from '@iconify/icons-fa-solid/fingerprint';
import icgroup_work from '@iconify/icons-ic/twotone-group-work';
import icPueblo from '@iconify/icons-fa-solid/city';
import icZonaGeografica from '@iconify/icons-fa-solid/street-view';
import icInfo from '@iconify/icons-fa-solid/info';
import icEdit from '@iconify/icons-ic/twotone-edit';
import ichouse_damage from '@iconify/icons-fa-solid/house-damage';
import icgps_fixed from '@iconify/icons-ic/twotone-gps-fixed';
import { ReplaySubject } from 'rxjs';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {Persona} from '../../../models/persona.model';
import {PersonaGlobalService} from '../../../service/persona-global.service';
import icpeople from '@iconify/icons-ic/twotone-people';
import icdirections_car from '@iconify/icons-ic/twotone-directions-car';
import icphone from '@iconify/icons-ic/twotone-phone';
import icsignal_cellular_connected_no_internet_0_bar from '@iconify/icons-ic/twotone-signal-cellular-connected-no-internet-0-bar';
import ichighlight from '@iconify/icons-ic/twotone-highlight';
import iccomputer from '@iconify/icons-ic/twotone-computer';
import icphone_android from '@iconify/icons-ic/twotone-phone-android';
import blind from '@iconify/icons-fa-solid/blind';
import american_sign_language_interpreting from '@iconify/icons-fa-solid/american-sign-language-interpreting';
import ichearing from '@iconify/icons-ic/twotone-hearing';
import icextension from '@iconify/icons-ic/twotone-extension';
import venus_mars from '@iconify/icons-fa-solid/venus-mars';
import diagnoses from '@iconify/icons-fa-solid/diagnoses';
import icaccessible from '@iconify/icons-ic/twotone-accessible';
import child from '@iconify/icons-fa-solid/child';
import {TableColumn} from '../../../../@vex/interfaces/table-column.interface';
import {Pedalera} from '../../../models/pedalera.model';
import {PedaleraService} from '../../../service/pedalera.service';
@Component({
  selector: 'vex-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
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
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  icWork = icWork;
  icaccessible = icaccessible;
  child = child ;
  icPersonAdd = icPersonAdd;
  icCheck = icCheck;
  icAccessTime = icAccessTime;
  icAdd = icAdd;
  diagnoses = diagnoses;
  venus_mars = venus_mars;
  icextension = icextension;
  ichearing = ichearing;
  iclenguage = american_sign_language_interpreting;
  icphone_android = icphone_android;
  iccomputer = iccomputer;
  icgroup_work = icgroup_work;
  icpeople = icpeople;
  fingerprint = icfingerprint;
  icred = icsignal_cellular_connected_no_internet_0_bar;
  ichighlight = ichighlight;
  icdirections_car = icdirections_car;
  icphone = icphone;
  icgps_fixed = icgps_fixed;
  ichouse_damage = ichouse_damage;
  icWhatshot = icWhatshot;
  icblind = blind ;
  icj = icj;
  icPerson = icPerson;
  icCedula = icCedula;
  icNacimiento = icNacimiento;
  icSexo = icSexo;
  icCivil = icCivil;
  icSangre = icSangre;
  icLateralidad = icLateralidad;
  icTransfucion = icTransfucion;
  icInstruccion = icInstruccion;
  icProfesion = icProfesion;
  icAsosiacion = icAsosiacion;
  icSalud = icSalud;
  icEdit = icEdit;
  icVinculado = icVinculado;
  icActivo = icActivo;
  icNacionalidad = icNacionalidad;
  icPueblo = icPueblo;
  icZonaGeografica = icZonaGeografica;
  icPhone = icPhone;
  icMail = icMail;
  icInfo = icInfo;
  persona: Persona;

  @Input()
  columns: TableColumn<Pedalera>[] = [
    { label: 'Nombre', property: 'nombre', type: 'text', visible: true },
    { label: 'Pedaleadas', property: 'pedaleadas', type: 'text', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Pedalera> | null;
  pedalera: Pedalera[] ;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
   private router: Router,
   private personaGlobal: PersonaGlobalService,
   private pedaleraService: PedaleraService
   ) {
    this.persona = this.personaGlobal.getActualPersona();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
    this.getPedaleraByPaciente();
  }
  getPedaleraByPaciente() {
    this.pedaleraService.getPedaleraByPerson().valueChanges().subscribe( value => {
      this.pedalera = value;
      this.dataSource.data = this.pedalera;
      console.log('mira');
      console.log(this.dataSource.data);
    });
  }
  ngOnDestroy() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  trackByProperty<T>(column: TableColumn<T>) {
    return column.property;
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

}
