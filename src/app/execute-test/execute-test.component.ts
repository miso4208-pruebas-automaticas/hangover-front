import { Component, OnInit } from '@angular/core';
import {ApplicationsService} from '../applications.service';
import {ApplicationsDto} from '../data/ApplicationsDto';

@Component({
  selector: 'app-execute-test',
  templateUrl: './execute-test.component.html',
  styleUrls: ['./execute-test.component.css']
})
export class ExecuteTestComponent implements OnInit {

  applications:Array<ApplicationsDto>;
  applicationSelect:ApplicationsDto;

  constructor(
    public applicationsService: ApplicationsService
  ) { }

  ngOnInit() {
    this.applications = this.applicationsService.getApplications();
  }

  public selectAplication(application) {    
    this.applicationSelect = this.applications.filter((item) => item.name == application)[0];
    console.log("SELECCION: ", JSON.stringify(this.applicationSelect));
  }


  executeTest() {

  }

}
