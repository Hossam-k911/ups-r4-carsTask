import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, CarsListComponent, CarDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
