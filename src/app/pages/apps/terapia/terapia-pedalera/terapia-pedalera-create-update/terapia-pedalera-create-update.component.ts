import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import {Pedalera} from '../../../../../models/pedalera.model';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icDescription from '@iconify/icons-ic/twotone-description';
import icPerson from '@iconify/icons-ic/twotone-person';
import {Persona} from '../../../../../models/persona.model';
import {PersonaService} from '../../../../../service/persona.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'vex-terapia-pedalera-create-update',
  templateUrl: './terapia-pedalera-create-update.component.html',
  styleUrls: ['./terapia-pedalera-create-update.component.scss']
})
export class TerapiaPedaleraCreateUpdateComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  icPerson = icPerson;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icAssignment = icAssignment;
  icDescription = icDescription;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  pedalera: Pedalera;
  personas: Persona[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private datePipe: DatePipe,
              private dialogRef: MatDialogRef<TerapiaPedaleraCreateUpdateComponent>,
              private fb: FormBuilder, protected personService: PersonaService) { }

  ngOnInit() {
    this.getPersonas();
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Pedalera;
    }
    this.form = this.fb.group({
      codigo : this.defaults.codigo || '',
      pedaleadas: this.defaults.pedaleadas || '',
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
      this.createPedalera();
    } else if (this.mode === 'update') {
      this.updatePedalera();
    }
  }
  createPedalera() {
    this.getDatosPedalera();
    console.log(this.pedalera);
    this.dialogRef.close(this.pedalera);
  }
  getDatosPedalera() {
    this.pedalera = this.form.value;
    const date =  this.form.get('fecha').value;
    const fecha = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.pedalera.fecha = fecha;
  }
  updatePedalera() {
   this.getDatosPedalera();
   console.log(this.pedalera);
   this.dialogRef.close(this.pedalera);
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }

}
