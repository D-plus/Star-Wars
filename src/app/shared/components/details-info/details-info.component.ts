import { Component, Input } from '@angular/core';
import { FieldsConfig } from '../../interfaces/fields-config.interface';
import { AbstractObject } from '../../interfaces/abstract-object.interface';

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.scss']
})
export class DetailsInfoComponent {
  @Input() title: string;
  @Input() fieldsConfig: FieldsConfig[];
  @Input() item: AbstractObject;
}
