import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {VexRoutes} from '../../../../@vex/interfaces/vex-route.interface';
import { Routes, Router, RouterModule } from '@angular/router';
const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: 'terapia-avd',
        loadChildren: () => import('./terapia-avd/terapia-avd.module').then( m => m.TerapiaAvdModule)
      },
      {
        path: 'terapia-pedalera',
        loadChildren: () => import('./terapia-pedalera/terapia-pedalera.module').then(m => m.TerapiaPedaleraModule )
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerapiaRoutingModule { }
