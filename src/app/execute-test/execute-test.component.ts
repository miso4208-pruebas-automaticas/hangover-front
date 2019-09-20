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

  


  msgResult:string;
  typeMsgResult = 'alert alert-success';
  isMiddleDivVisible: boolean;


  appSelect;
  levelSelect;
  typeSelect;
  numberExecution;

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


    let data:ExecuteDto = new ExecuteDto();
    data.aplication = this.appSelect.id;
    data.level = this.levelSelect.name;
    data.type = this.typeSelect.name;  
    data.numberExecution = this.numberExecution;
    data.code = this.generateCode();   
    console.log("DATA: ", JSON.stringify(data));

    this.executeTestService.executeTest(data).subscribe(res => {
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



  private generateCode() {
    return Math.random().toString(36).substr(2, 9);
 }




}
