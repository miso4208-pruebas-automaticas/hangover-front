import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../applications.service';
import { TestLevelsService } from '../test-levels.service';
import { ApplicationsDto } from '../data/ApplicationsDto';
import { LevelsDto } from '../data/LevelsDto';
import { TypeDto } from '../data/TypesDto';
import { TestTypeService } from '../test-type.service';
import { ExecuteTestService } from '../execute-test.service';
import { LocalStorageService } from '../local-storage.service';
import { ExecuteDto } from '../data/ExecuteDto';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-execute-test',
  templateUrl: './execute-test.component.html',
  styleUrls: ['./execute-test.component.css']
})
export class ExecuteTestComponent implements OnInit {

  levels: Array<LevelsDto>
  types: Array<TypeDto>
  subTypes: Array<TypeDto>
  subTypesWeb: Array<TypeDto>
  subTypesMobile: Array<TypeDto>
  //applications:Array<ApplicationsDto>;
  applications;


  msgResult: string;
  typeMsgResult = 'alert alert-success';
  isMiddleDivVisible: boolean;


  appSelect;
  levelSelect;
  typeSelect: TypeDto;
  subTypeSelect: TypeDto;
  numberExecution;
  numberRepetitions;
  executionTime;
  code;

  ramdonSelect: boolean;

  constructor(
    public applicationsService: ApplicationsService,
    public testLevelsService: TestLevelsService,
    public testTypeService: TestTypeService,
    public executeTestService: ExecuteTestService,
    public localStorageService: LocalStorageService,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.getApplications();
    this.ramdonSelect = false;
    this.isMiddleDivVisible = false;
    //this.applications = this.applicationsService.getApplications();
    this.levels = this.testLevelsService.getLevels();
    this.types = this.testTypeService.getTypes();
    this.subTypesMobile = this.testTypeService.getSubTypesMobile();
    this.subTypesWeb = this.testTypeService.getSubTypesWeb();

  }

  public getApplications() {
    this.crudService.getApplications().subscribe(res => {
      this.applications = res['applications'];
    })

  }

  public selectAplication() {
    console.log("appSelect: ", JSON.stringify(this.appSelect));
    if (this.appSelect.id_application === 'HABITICA_WEB') {
      this.subTypes = this.subTypesWeb;
    } else {
      this.subTypes = this.subTypesMobile
    }
  }

  public selectType() {

  }

  public selectSubType() {
    this.ramdonSelect = false;
    if (this.subTypeSelect.name === 'random') {
      this.ramdonSelect = true;
    }

  }


  public executeTest() {
    this.isMiddleDivVisible = false;
    this.code = this.generateCode();

    let data: ExecuteDto = new ExecuteDto();
    data.app = this.appSelect.id_application;
    data.number
    data.code = this.code;
    data.path_project = this.getPathProject(this.subTypeSelect.name);
    data.level = this.levelSelect.name;
    data.type = this.typeSelect.name;
    data.subType = this.subTypeSelect.name;
    data.numberExecution = this.numberExecution;
    data.executionTime = "1";
    data.repetitions = this.numberRepetitions;
    data.status = "0";
    data.aplication = this.appSelect.id_application;
    data.typeAplication = this.getTypeApplicacion(this.appSelect.id_application);
    console.log("execution DATA: ", JSON.stringify(data));

    this.executeTestService.executeTest(data).subscribe(res => {
      this.typeMsgResult = 'alert alert-success';
      console.log('EJECUCION OK: ', JSON.stringify(res));
      this.msgResult = "Ejecución en proceso. Codigo: " + this.code;

      this.localStorageService.storeOnLocalStorage(data);

      this.isMiddleDivVisible = true;
      this.clean();

    }, (err) => {
      this.typeMsgResult = 'alert alert-danger';
      console.log('EJECUCION ERROR: ', err);
      this.msgResult = "Ocurrio un error al ejecutar la prueba.";
      this.isMiddleDivVisible = true;
    });

  }

  private clean() {
    this.appSelect = null;
    this.numberExecution = null; 
    this.numberRepetitions = null;
    this.executionTime = null;
    this.typeSelect = null;
    this.levelSelect = null;
  }

  private getTypeApplicacion(type: string) {
    let tipo = "";
    switch (type) {
      case 'CALENDULA':
        tipo = 'MOBILE';
        break;
      case 'HABITICA_WEB':
        tipo = 'WEB';
        break;
      case 'HABITICA':
        tipo = 'MOBILE';
        break;      
      default:
        tipo = 'WEB';
    }
    return tipo;

  }

  private getPathProject(subType: string) {
    let path = "/Users/leonardovalbuena/Documents/workspaceUniandes/pruebasAut/proyecto";
    switch (subType) {
      case 'random':
        path = path + '/Android_worker';
        break;
      case 'BDD':
        path = path + '/worker-bdd';
        break;
      case 'headless':
        path = path + '/workerWebCypress';
        break;
      case 'MOCKARO':
        path = path + '/worker_random_data_cypress';
        break;
      default:
        console.log('NO EJECUCION');
    }


    return path;
  }

  private generateCode() {
    return Math.random().toString(36).substr(2, 9);
  }




}
