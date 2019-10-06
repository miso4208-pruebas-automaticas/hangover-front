import { Component, OnInit } from '@angular/core';
import {ApplicationsService} from '../applications.service';
import {TestLevelsService} from '../test-levels.service';
import {ApplicationsDto} from '../data/ApplicationsDto';
import { LevelsDto } from '../data/LevelsDto';
import { TypeDto } from '../data/TypesDto';
import { TestTypeService } from '../test-type.service';
import { ExecuteTestService } from '../execute-test.service';
import {LocalStorageService} from '../local-storage.service';
import { ExecuteDto } from '../data/ExecuteDto';

@Component({
  selector: 'app-execute-test',
  templateUrl: './execute-test.component.html',
  styleUrls: ['./execute-test.component.css']
})
export class ExecuteTestComponent implements OnInit {

  levels:Array<LevelsDto>
  types:Array<TypeDto>
  subTypes:Array<TypeDto>
  subTypesWeb:Array<TypeDto>
  subTypesMobile:Array<TypeDto>
  applications:Array<ApplicationsDto>;
  
  
  msgResult:string;
  typeMsgResult = 'alert alert-success';
  isMiddleDivVisible: boolean;


  appSelect:ApplicationsDto;;
  levelSelect;
  typeSelect:TypeDto;
  subTypeSelect:TypeDto;
  numberExecution;
  code;

  ramdonSelect:boolean;

  constructor(    
    public applicationsService: ApplicationsService,
    public testLevelsService: TestLevelsService,
    public testTypeService: TestTypeService,
    public executeTestService: ExecuteTestService,
    public localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.ramdonSelect = false;
    this.isMiddleDivVisible = false;
    this.applications = this.applicationsService.getApplications();
    this.levels = this.testLevelsService.getLevels();
    this.types = this.testTypeService.getTypes();
    this.subTypesMobile = this.testTypeService.getSubTypesMobile();
    this.subTypesWeb = this.testTypeService.getSubTypesWeb();

  }

  public selectAplication() {    
    console.log("appSelect: ", JSON.stringify(this.appSelect));
      if (this.appSelect.id === 'HABITICA_WEB') {
        this.subTypes = this.subTypesWeb;
      } else {
        this.subTypes = this.subTypesMobile
      }      
  }

  public selectType() {    
    
  }

  public selectSubType() {
    this.ramdonSelect = false;
    if (this.subTypeSelect.name === 'Ramdon') {
      this.ramdonSelect = true;
    }

  }


  public executeTest() {    
    this.isMiddleDivVisible = false;
    this.code = this.generateCode();

    let data:ExecuteDto = new ExecuteDto();
    data.aplication = this.appSelect.id;
    data.level = this.levelSelect.name;
    data.type = this.typeSelect.name;  
    data.numberExecution = this.numberExecution;
    data.code = this.code   
    console.log("DATA: ", JSON.stringify(data));

    this.executeTestService.executeTest(data).subscribe(res => {
      this.typeMsgResult = 'alert alert-success';
      console.log('EJECUCION OK: ', JSON.stringify(res));
      this.msgResult = "Ejecución realizada con exito. Codigo: " + this.code;

      this.localStorageService.storeOnLocalStorage(data);

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
