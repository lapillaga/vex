import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonaGlobalService {

  constructor() {
  }

  savePersonaInstance(personaSeleccionado){
    let persona = localStorage.setItem('personaActual' , JSON.stringify(personaSeleccionado));
  }

  getActualPersona() {
    return JSON.parse(localStorage.getItem('personaActual'));
  }

  removeActualPersona() {
    localStorage.removeItem('personaActual');
  }
}
