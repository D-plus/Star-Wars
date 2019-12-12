import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractObject } from '../../../interfaces/abstract-object.interface';
import { ListTitleItem } from '../list-title/list-title-item.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() item: AbstractObject;
  @Input() columnsList: ListTitleItem[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  handleListItemClick(event) {
    event.stopPropagation();

    this.router.navigate(
      [this.item.pageURL],
      {
        relativeTo: this.activatedRoute,
        queryParamsHandling: 'merge',
      }
    );
  }

  trackByColumnFields({}, item): string {
    return item.value;
  }
}
