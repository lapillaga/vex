import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';
import { TerapiaPedaleraComponent } from './terapia-pedalera.component';


const routes: VexRoutes = [
  {
    path: '',
    component: TerapiaPedaleraComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerapiaPedaleraRoutingModule {
}
