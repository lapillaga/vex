import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
// modelo
import {Pedalera} from '../models/pedalera.model';
import {CajaAvd} from '../models/cajaAvd.model';


@Injectable({
  providedIn: 'root'
})
export class PedaleraService {
  pedaleraLst: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase,
              private afs: AngularFirestore){
  }
  getPedaleraByPerson() {
   return  this.pedaleraLst = this.firebase.list('pedalera' , ref => ref.orderByChild('codigo').equalTo('1'));
  }
  getPedaleras() {
    return this.pedaleraLst = this.firebase.list('pedalera');
  }
  insertCaja(pedalera: Pedalera) {
    return this.pedaleraLst.push({
      pedaleadas : pedalera.pedaleadas,
      fecha: pedalera.fecha,
      codigo: pedalera.codigo
    });
  }
  updatePedalera(pedalera: Pedalera ,  id) {
    console.log(id)
    return this.pedaleraLst.update(id, {
      pedaledas: pedalera.pedaleadas,
      fecha: pedalera.fecha,
      codigo: pedalera.codigo
    });
  }
  deletePedalera($Key: string) {
    return this.pedaleraLst.remove($Key);
  }
}
