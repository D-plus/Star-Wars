import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './shared/constants/routes';


const routes: Routes = [
  { path: '', redirectTo: ROUTES.PEOPLE, pathMatch: 'full', },
  {
    path: ROUTES.PEOPLE,
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule),
  },
  {
    path: `${ROUTES.PERSON}/:id`,
    loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
  },
  { path: '**', redirectTo: ROUTES.PEOPLE, },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
