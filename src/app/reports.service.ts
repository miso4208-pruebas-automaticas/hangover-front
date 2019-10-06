import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private httpClient: HttpClient) { }


  public executeReport(data) {
    return this.httpClient.post('http://localhost:5000/execute/report', data);
    
  }
}
