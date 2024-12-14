import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  constructor(public cars: CarsService) {}
  pageNumber: number = 1;
  carsList: any[] = [];
  ngOnInit(): void {
    this.onGettingCars();
  }

  onGettingCars(): void {
    this.cars.getAllCars().subscribe((res: any) => {
      this.carsList = res;
    });
  }
}
