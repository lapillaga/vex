import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
// modelo
import {Persona} from '../models/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  personaList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) {
  }
  getPersons() {
    return this.personaList = this.firebase.list('persona');
  }
  insertPerson(person: Persona) {
   return this.personaList.push({
    apellido: person.apellido,
    casa: person.casa,
    cedula: person.cedula,
    codigo: person.codigo,
    dis_auditiva: person.dis_auditiva,
    dis_fisica: person.dis_fisica,
    dis_intelectual: person.dis_intelectual,
    dis_lenguaje: person.dis_lenguaje,
    dis_mental : person.dis_mental,
    dis_visual : person.dis_visual,
    edad: person.edad,
    enf_artritis : person.enf_artritis,
    enf_artrosis : person.enf_artrosis,
    enf_tendinitis : person.enf_tendinitis,
    etnia : person.etnia ,
    genero : person.genero ,
    nombre : person.nombre ,
    observacion : person.observacion,
    sector_vivienda: person.sector_vivienda,
    serv_celular: person.serv_celular,
    serv_computadora : person.serv_computadora,
    serv_convencional : person.serv_convencional,
    serv_electricidad : person.serv_electricidad,
    serv_internet: person.serv_internet,
    serv_telefono: person.serv_telefono,
    tivo_vivienda : person.tivo_vivienda,
    via_acceso: person.via_acceso,
    vive_persona: person.vive_persona
      });
  }
  updatePerson(person: Persona) {
    this.personaList.update(person.$key,{
      apellido: person.apellido,
      casa: person.casa,
      cedula: person.cedula,
      codigo: person.codigo,
      dis_auditiva: person.dis_auditiva,
      dis_fisica: person.dis_fisica,
      dis_intelectual: person.dis_intelectual,
      dis_lenguaje: person.dis_lenguaje,
      dis_mental : person.dis_mental,
      dis_visual : person.dis_visual,
      edad: person.edad,
      enf_artritis : person.enf_artritis,
      enf_artrosis : person.enf_artrosis,
      enf_tendinitis : person.enf_tendinitis,
      etnia : person.etnia ,
      genero : person.genero ,
      nombre : person.nombre ,
      observacion : person.observacion,
      sector_vivienda: person.sector_vivienda,
      serv_celular: person.serv_celular,
      serv_computadora : person.serv_computadora,
      serv_convencional : person.serv_convencional,
      serv_electricidad : person.serv_electricidad,
      serv_internet: person.serv_internet,
      serv_telefono: person.serv_telefono,
      tivo_vivienda : person.tivo_vivienda,
      via_acceso: person.via_acceso,
      vive_persona: person.vive_persona
    });
  }
  deletePerson($Key: string) {
    this.personaList.remove($Key);
  }
}
