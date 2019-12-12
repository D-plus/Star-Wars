import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonDetailsPageComponent } from './person-details-page/person-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: PersonDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
