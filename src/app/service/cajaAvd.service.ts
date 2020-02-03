import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {CajaAvd} from '../models/cajaAvd.model';


@Injectable({
  providedIn: 'root'
})
export class CajaAvdService {
  cajaLst: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase,
              private afs: AngularFirestore){
  }
  getCajaByAldaba() {
    return  this.cajaLst = this.firebase.list('caja' , ref => ref.orderByChild('ejercicio').equalTo('ALDABA'));
  }
  getCajas() {
    return this.cajaLst = this.firebase.list('caja');
  }
  insertCaja(cajaAvd: CajaAvd) {
    return this.cajaLst.push({
      ejercicio: cajaAvd.ejercicio,
     ejercitaciones: cajaAvd.ejercitaciones,
      fecha: cajaAvd.fecha,
      codigo: cajaAvd.codigo
    });
  }
  updateCaja(cajaAvd: CajaAvd ,  id) {
    console.log(id)
    return this.cajaLst.update(id, {
     ejercicio: cajaAvd.ejercicio,
     ejercitaciones: cajaAvd.ejercitaciones,
      fecha: cajaAvd.fecha,
      codigo: cajaAvd.codigo
    });
  }
  deleteCaja($Key: string) {
    return this.cajaLst.remove($Key);
  }
}
