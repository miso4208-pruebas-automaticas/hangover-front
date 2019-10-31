import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }


  public getApplications() {
    return this.httpClient.get('http://localhost:5000/crud/applications');
    
  }

  public createApp(data) {
    return this.httpClient.post('http://localhost:5000/crud/application', data);
  }

  public getTypesApp() {
    var types = [
      {name:"WEB"},
      {name:"MOBILE"}      
    ]
    return types;
  }


}
