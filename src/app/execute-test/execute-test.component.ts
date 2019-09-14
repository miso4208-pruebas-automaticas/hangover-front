import { Component, OnInit } from '@angular/core';
import {ApplicationsService} from '../applications.service';
import {TestLevelsService} from '../test-levels.service';
import {ApplicationsDto} from '../data/ApplicationsDto';
import { LevelsDto } from '../data/LevelsDto';
import { TypeDto } from '../data/TypesDto';
import { TestTypeService } from '../test-type.service';
import { ExecuteTestService } from '../execute-test.service';
import { ExecuteDto } from '../data/ExecuteDto';

@Component({
  selector: 'app-execute-test',
  templateUrl: './execute-test.component.html',
  styleUrls: ['./execute-test.component.css']
})
export class ExecuteTestComponent implements OnInit {

  levels:Array<LevelsDto>
  types:Array<TypeDto>
  applications:Array<ApplicationsDto>;
  applicationSelect:ApplicationsDto;

  executeData:ExecuteDto;

  constructor(
    public applicationsService: ApplicationsService,
    public testLevelsService: TestLevelsService,
    public testTypeService: TestTypeService,
    public executeTestService: ExecuteTestService
  ) { }

  ngOnInit() {
    this.applications = this.applicationsService.getApplications();
    this.levels = this.testLevelsService.getLevels();
    this.types = this.testTypeService.getTypes();
  }

  public selectAplication(application) {    
    this.applicationSelect = this.applications.filter((item) => item.name == application)[0];    
  }


  public executeTest() {
    this.executeTestService.executeTest(this.executeData).subscribe(res => {
      console.log(res['code']);

    });

  }

}
