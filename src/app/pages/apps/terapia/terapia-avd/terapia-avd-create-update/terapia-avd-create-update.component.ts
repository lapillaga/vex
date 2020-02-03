import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import {CajaAvd} from '../../../../../models/cajaAvd.model';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icDescription from '@iconify/icons-ic/twotone-description';
import icPerson from '@iconify/icons-ic/twotone-person';
import {DatePipe} from '@angular/common';
import {Persona} from '../../../../../models/persona.model';
import {PersonaService} from '../../../../../service/persona.service';
@Component({
  selector: 'vex-terapia-avd-create-update',
  templateUrl: './terapia-avd-create-update.component.html',
  styleUrls: ['./terapia-avd-create-update.component.scss']
})
export class TerapiaAvdCreateUpdateComponent implements OnInit {
  form: FormGroup;
  ejerList: any = [
    {valor: 'ESCALERA DE DEDOS', texto: 'Escalera de dedos'},
    {valor: 'CHAPA', texto: 'Chapa'},
    {valor: 'INTERRUPTOR', texto: 'Interruptor'},
    {valor: 'ALDABA', texto: 'Aldaba'},
    {valor: 'CAMINO', texto: 'Camino'},
  ];
  mode: 'create' | 'update' = 'create';
  icPerson = icPerson;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icAssignment = icAssignment;
  icDescription = icDescription;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  caja: CajaAvd;
  personas: Persona[] = [];
  idcaja: string;
  resp: any;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private datePipe: DatePipe,
              private dialogRef: MatDialogRef<TerapiaAvdCreateUpdateComponent>,
              private fb: FormBuilder, protected personService: PersonaService) { }

  ngOnInit() {
    this.getPersonas();
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as CajaAvd;
    }
    this.form = this.fb.group({
      codigo: this.defaults.codigo || '',
      ejercicio : this.defaults.ejercicio || '',
      ejercitaciones: this.defaults.ejercitaciones || '',
      fecha: this.defaults.fecha || ''
    });
  }
  getPersonas() {
    this.personService.getPersons()
      .snapshotChanges()
      .subscribe(item => {
        this.personas = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          // @ts-ignore
          x.$Key = element.key;
          this.personas.push(x as Persona);
        });
      });
  }
  save() {
    if (this.mode === 'create') {
      this.createCaja();
    } else if (this.mode === 'update') {
      this.updateCaja();
    }
  }
  createCaja() {
    this.getDatoscaja();
    console.log(this.caja);
    this.dialogRef.close(this.caja);
  }
  updateCaja() {
    this.getDatoscaja();
    console.log('Aui');
    console.log(this.caja);
    this.dialogRef.close(this.caja);
  }
  getDatoscaja() {
    this.caja = this.form.value;
    const date =  this.form.get('fecha').value;
    const fecha = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.caja.fecha = fecha;
    }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }


}
