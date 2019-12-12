import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Planet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-planet-details-dialog',
  templateUrl: './planet-details-dialog.component.html',
  styleUrls: ['./planet-details-dialog.component.scss']
})
export class PlanetDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<PlanetDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Planet) {
  }

  onClickOk(): void {
    this.dialogRef.close();
  }

}
