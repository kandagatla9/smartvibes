import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerPageComponent } from './inner-page.component';

const routes: Routes = [
  {path: '', component: InnerPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerPageRoutingModule { }
