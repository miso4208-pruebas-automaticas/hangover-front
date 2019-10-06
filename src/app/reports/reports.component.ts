import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import { ReportsService } from '../reports.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reportList;
  reportSelect;
  reportDetail;

  

  constructor(
    public localStorageService:LocalStorageService,
    private reportsService:ReportsService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.reportList = this.localStorageService.getReport();
  
  }


  public getReport(report) {
    this.reportSelect = report['code'];
    console.log('report-select: ', JSON.stringify(report));

    this.reportsService.executeReport(report).subscribe(res => {
      console.log('resutado-repor: ', res['report']);
      this.reportDetail = res['report'];
    })
    


  }


  

}
