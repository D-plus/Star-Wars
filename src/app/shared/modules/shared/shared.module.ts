import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppListComponent } from '../../components/app-list/app-list.component';
import { ListTitleComponent } from '../../components/app-list/list-title/list-title.component';
import { ListItemComponent } from '../../components/app-list/list-item/list-item.component';
import { SortByPipe } from '../../pipes/sort-by.pipe';


@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatInputModule,
    FontAwesomeModule,
    RouterModule,
  ],
  declarations: [
    AppListComponent,
    ListTitleComponent,
    ListItemComponent,
    SortByPipe,
  ],
  exports: [
    CommonModule,
    MatPaginatorModule,
    MatInputModule,
    FontAwesomeModule,
    AppListComponent,
    ListTitleComponent,
    ListItemComponent,
    SortByPipe,
  ]
})
export class SharedModule {
}
