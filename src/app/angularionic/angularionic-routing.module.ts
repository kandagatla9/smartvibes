import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularionicComponent } from './angularionic.component';

const routes: Routes = [
  {path: '', component: AngularionicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularionicRoutingModule { }
