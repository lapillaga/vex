import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';
import {TerapiaAvdComponent} from './terapia-avd.component';


const routes: VexRoutes = [
  {
    path: '',
    component: TerapiaAvdComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerapiaAvdRoutingModule {
}
