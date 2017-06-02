import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VehicleService {
  REMOTE_URL ="https://vehicle-demo-para1.herokuapp.com"
  constructor(private http: Http) { }

  getAllVehicles() {
    return new Promise((resolve, reject) => {
      this.http.get(this.REMOTE_URL + '/vehicle')
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
        this.http.get(this.REMOTE_URL + '/vehicle/' + id)
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
            data.token = localStorage.getItem('id_token')
        this.http.post(this.REMOTE_URL +'/vehicle/add', data)
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
 
        this.http.put(this.REMOTE_URL + '/vehicle/update/' + id, data)
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
        this.http.delete(this.REMOTE_URL + '/vehicle/' + id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
