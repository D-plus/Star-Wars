import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeoplePageComponent } from './people-page/people-page.component';

const routes: Routes = [
  {
    path: '',
    component: PeoplePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
