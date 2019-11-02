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

  public getLevels() {
    return this.httpClient.get('http://localhost:5000/crud/levels');
  }

  public getTypes() {
    return this.httpClient.get('http://localhost:5000/crud/types');
  }

  public createTypes(data) {
    return this.httpClient.post('http://localhost:5000/crud/types', data);
  }

  public createLevel(data) {
    return this.httpClient.post('http://localhost:5000/crud/levels', data);
  }

  public createApp(data) {
    return this.httpClient.post('http://localhost:5000/crud/application', data);
  }

  public getTypesApp() {
    var types = [
      { name: "WEB" },
      { name: "MOBILE" }
    ]
    return types;
  }


}
