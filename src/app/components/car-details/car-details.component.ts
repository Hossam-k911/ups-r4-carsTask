import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  carId: number = 0;
  carObj: any = {};
  constructor(
    public activatedRoute: ActivatedRoute,
    public _carsService: CarsService
  ) {
    this.carId = activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    console.log(this.carId);

    this.onGetCarById()
  }

  onGetCarById(): void {
    this._carsService.getCarById(this.carId).subscribe((res: any) => {
      this.carObj = res.Car;

      console.log(this.carObj);
      
    });
  }
}
