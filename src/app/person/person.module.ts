import { NgModule } from '@angular/core';

import { PersonRoutingModule } from './person-routing.module';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { PersonDetailsPageComponent } from './person-details-page/person-details-page.component';
import { PlanetDetailsDialogComponent } from '../shared/components/planet-details-dialog/planet-details-dialog.component';


@NgModule({
  declarations: [
    PersonDetailsPageComponent,
    PlanetDetailsDialogComponent
  ],
  imports: [
    PersonRoutingModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [PlanetDetailsDialogComponent],
})
export class PersonModule {
}
