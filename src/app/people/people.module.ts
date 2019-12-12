import { NgModule } from '@angular/core';

import { PeopleRoutingModule } from './people-routing.module';
import { SharedModule } from '../shared/modules/shared/shared.module';

import { PeoplePageComponent } from './people-page/people-page.component';


@NgModule({
  declarations: [
    PeoplePageComponent,
  ],
  imports: [
    PeopleRoutingModule,
    SharedModule,
  ]
})
export class PeopleModule {
}
