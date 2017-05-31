import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VehicleService {

  constructor(private http: Http) { }

  getAllVehicles() {
    return new Promise((resolve, reject) => {
      this.http.get('https://vehicle-demo-para1.herokuapp.com/vehicle')
        .map(res => res.json())
        .subscribe(res => {
          console.log(res);
          resolve(res);
        }, (err) => {
          console.log(err);

          reject(err);
        });
    });
  }

  showVehicles(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/vehicle/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveVehicle(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/vehicle', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateVehicle(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/vehicle/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteVehicle(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/vehicle/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
