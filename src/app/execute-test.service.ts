import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExecuteDto } from './data/ExecuteDto';

@Injectable({
  providedIn: 'root'
})
export class ExecuteTestService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public executeTest(data:ExecuteDto) {
    return this.httpClient.post('http://localhost:5000/execute/test', data);
    
  }
}
