import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToasterModule, ToasterService } from 'angular2-toaster';

import { AppRoutingModule } from './app-routing.module';

import { PeopleService } from './shared/services/people/people.service';
import { PlanetsService } from './shared/services/planets/planets.service';
import { LoadingService } from './shared/services/loading/loading.service';
import { APIInterceptor } from './shared/services/APIInterceptor/APIInterceptor.service';

import { AppComponent } from './app.component';
import { ProgressSpinnerComponent } from './shared/components/progress-spinner/progress-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ToasterModule,
  ],
  providers: [
    PeopleService,
    PlanetsService,
    LoadingService,
    ToasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
