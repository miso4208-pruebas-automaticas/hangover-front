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


  msgResult:string;
  typeMsgResult = 'alert alert-success';
  isMiddleDivVisible: boolean;

  constructor(    
    public applicationsService: ApplicationsService,
    public testLevelsService: TestLevelsService,
    public testTypeService: TestTypeService,
    public executeTestService: ExecuteTestService
  ) { }

  ngOnInit() {
    this.isMiddleDivVisible = false;
    this.applications = this.applicationsService.getApplications();
    this.levels = this.testLevelsService.getLevels();
    this.types = this.testTypeService.getTypes();
  }

  public selectAplication(application) {    
    this.applicationSelect = this.applications.filter((item) => item.name == application)[0];    
  }


  public executeTest() {
    this.isMiddleDivVisible = false;
    this.executeTestService.executeTest(this.executeData).subscribe(res => {
      this.typeMsgResult = 'alert alert-success';
      console.log('EJECUCION OK: ', JSON.stringify(res));
      this.msgResult = "Ejecución realizada con exito.";
      this.isMiddleDivVisible = true;
      
    }, (err) => {
      this.typeMsgResult = 'alert alert-danger'; 
      console.log('EJECUCION ERROR: ', err);
      this.msgResult = "Ocurrio un error al ejecutar la prueba.";
      this.isMiddleDivVisible = true;
    });
    
    
  }



  




}
