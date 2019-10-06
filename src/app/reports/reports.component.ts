import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reportList;

  constructor(
    public localStorageService:LocalStorageService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.reportList = this.localStorageService.getReport();
  
  }


  

}
