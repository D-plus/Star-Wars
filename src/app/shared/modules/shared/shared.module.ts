import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListComponent } from '../../components/list/list.component';
import { ListTitleComponent } from '../../components/list/list-title/list-title.component';
import { ListItemComponent } from '../../components/list/list-item/list-item.component';
import { SortByPipe } from '../../pipes/sort-by.pipe';
import { DetailsInfoComponent } from '../../components/details-info/details-info.component';


@NgModule({
  declarations: [
    ListComponent,
    ListTitleComponent,
    ListItemComponent,
    SortByPipe,
    DetailsInfoComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatInputModule,
    FontAwesomeModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    MatPaginatorModule,
    MatInputModule,
    FontAwesomeModule,
    ListComponent,
    ListTitleComponent,
    ListItemComponent,
    SortByPipe,
    DetailsInfoComponent,
  ]
})
export class SharedModule {
}
