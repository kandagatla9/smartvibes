import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetComponent } from './net.component';

const routes: Routes = [
  {path: '', component: NetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetRoutingModule { }
