import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
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
    public localStorageService: LocalStorageService,
    private reportsService: ReportsService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    //this.reportList = this.localStorageService.getReport();


    this.getReports();




  }

  private getReports() {
    console.log("consulta regstros...");
    this.reportsService.getExecutions().subscribe(res => {
      this.reportList = res['executions'];

      window.setInterval(function () {
        location.reload();
      }, 10000);


    })
  }


  public getReport(report) {
    let url = report.url_report;
    console.log("url reporte:", url);

    window.open(
      url,
      '_blank'
    );


    /*
    this.reportsService.executeReport(report).subscribe(res => {
      console.log('resutado-repor: ', res['report']);
      this.reportDetail = res['report'];
    })
    */



  }




}
