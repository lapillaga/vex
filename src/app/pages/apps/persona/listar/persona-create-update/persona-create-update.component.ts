import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPerson from '@iconify/icons-ic/twotone-person';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icFormatListNumbered from '@iconify/icons-ic/format-list-numbered';
import icCheck from '@iconify/icons-ic/check';
import icCheckCircleOutline from '@iconify/icons-ic/baseline-check-circle-outline';
import icTextFormat from '@iconify/icons-ic/text-format';
import icAccessTime from '@iconify/icons-ic/access-time';
import {Persona} from '../../../../../models/persona.model';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icDescription from '@iconify/icons-ic/twotone-description';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'vex-persona-create-update',
  templateUrl: './persona-create-update.component.html',
  styleUrls: ['./persona-create-update.component.scss'],
})
export class PersonaCreateUpdateComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  sexoList: any = [
    {valor: 'MASCULINO', texto: 'Masculino'},
    {valor: 'FEMENINO', texto: 'Femenino'},
  ];
  tipoViviendaList: any = [
    {valor: 'HORMIGON', texto: 'Hormigon'},
    {valor: 'TRADICIONAL', texto: 'Tradicional'},
    {valor: 'OTRO', texto: 'Otro'},
  ];
  respuestaRapidaList: any = [
    {valor: 'si', texto: 'Si'},
    {valor: 'no', texto: 'No'},
  ];
  casaList: any = [
    {valor: 'propia', texto: 'Propia'},
    {valor: 'otro', texto: 'Otro'},
  ];
  tendiList: any = [
    {valor: 'aguda', texto: 'Aguda'},
    {valor: 'cronico', texto: 'Crónico'},
  ];
  icAssignment = icAssignment;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icPerson = icPerson;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icDescription = icDescription;
  persona: Persona;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<PersonaCreateUpdateComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Persona;
    }
    this.form = this.fb.group({
      apellido: this.defaults.apellido || '',
      casa: this.defaults.casa || '',
      cedula: this.defaults.cedula || '',
      codigo: this.defaults.codigo || '',
      dis_auditiva: this.defaults.dis_auditiva || '',
      dis_fisica: this.defaults.dis_fisica || '',
      dis_intelectual: this.defaults.dis_intelectual || '',
      dis_lenguaje: this.defaults.dis_mental || '',
      dis_mental : this.defaults.dis_mental || '',
      dis_visual : this.defaults.dis_visual || '',
      edad: this.defaults.edad || '',
      enf_artritis : this.defaults.enf_artritis || '',
      enf_artrosis : this.defaults.enf_artrosis || '',
      enf_tendinitis : this.defaults.enf_tendinitis || '',
      etnia : this.defaults.etnia || '',
      genero : this.defaults.genero || '',
      nombre : this.defaults.nombre || '',
      observacion : this.defaults.observacion || '',
      sector_vivienda: this.defaults.sector_vivienda || '',
      serv_celular: this.defaults.serv_celular || '',
      serv_computadora : this.defaults.serv_computadora || '',
      serv_convencional : this.defaults.serv_convencional || '',
      serv_electricidad : this.defaults.serv_electricidad || '',
      serv_internet: this.defaults.serv_internet || '',
      serv_telefono: this.defaults.serv_telefono || '',
      tivo_vivienda : this.defaults.tivo_vivienda || '',
      via_acceso: this.defaults.via_acceso || '' ,
      vive_persona: this.defaults.vive_persona || '',
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createPersona();
    } else if (this.mode === 'update') {
      this.updatePersona();
    }
  }
  createPersona() {
    const persona = this.form.value;
    this.dialogRef.close(persona);
  }

  updatePersona() {
    const persona = this.form.value;
    this.persona = this.form.value;
    console.log('Aui');
    console.log(this.persona);
    this.dialogRef.close(persona);
  }
  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}
