import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from './dialog-data.interface';

@Component({
  selector: 'app-planet-details-dialog',
  templateUrl: './planet-details-dialog.component.html',
  styleUrls: ['./planet-details-dialog.component.scss']
})
export class PlanetDetailsDialogComponent {
  constructor(public dialogRef: MatDialogRef<PlanetDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onClickOk(): void {
    this.dialogRef.close();
  }

}
