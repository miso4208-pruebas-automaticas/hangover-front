import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DinamicDataService {

  constructor(private httpClient: HttpClient) { }


  public getDataHabitica(data) {
    return this.httpClient.get('https://my.api.mockaroo.com/users/' + data + '.json?key=ec487890');
  }

  public getDataCalendula(data) {
    return this.httpClient.get('https://my.api.mockaroo.com/users_calendula/' + data + '.json?key=ec487890');
  }


}
