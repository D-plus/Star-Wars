import { Planet } from '../../shared/interfaces/planet.interface';
import { FieldsConfig } from '../../shared/interfaces/fields-config.interface';

export interface DialogData {
  planet: Planet;
  dialogDetailsConfig: FieldsConfig[];
}
