import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { ListTitleItem } from './list-title-item';
import { faSortAmountDown, faSortAmountDownAlt, faSort, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SortData } from '../../../interfaces/sort-data.interface';
import { SORT_DIRECTIONS } from '../../../constants/common';

@Component({
  selector: 'app-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.scss']
})
export class ListTitleComponent {
  @Input() active = false;
  @Input() item: ListTitleItem;
  @Input() sortDirection: string;
  @Output() sortClick: EventEmitter<SortData> = new EventEmitter<SortData>();
  faSort = faSort;
  faSortAmountDownAlt = faSortAmountDownAlt;
  faSortAmountDown = faSortAmountDown;

  handleSortClick(event): SortData | void {
    event.stopPropagation();
    const nextSortData = {
      field: this.item.value,
      direction: SORT_DIRECTIONS.ASC,
      sortValuesType: this.item.sortValuesType,
    };
    if (!this.active) {
      return this.sortClick.emit(nextSortData);
    }

    nextSortData.direction = this.sortDirection === SORT_DIRECTIONS.ASC ? SORT_DIRECTIONS.DESC : SORT_DIRECTIONS.ASC;
    this.sortClick.emit(nextSortData);
  }

  get sortIcon(): IconDefinition {
    if (!this.active) {
      return this.faSort;
    } else if (this.sortDirection === SORT_DIRECTIONS.ASC) {
      return this.faSortAmountDownAlt;
    }

    return this.faSortAmountDown;
  }
}
