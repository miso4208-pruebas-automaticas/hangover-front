import { Component, OnInit } from '@angular/core';
import { DinamicDataService } from '../dinamic-data.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-dinamic-data',
  templateUrl: './dinamic-data.component.html',
  styleUrls: ['./dinamic-data.component.css']
})
export class DinamicDataComponent implements OnInit {

  applicationList;

  appSelect;

  numberData;
  dataGenerated;

  constructor(
    public dinamicDataService: DinamicDataService,
    private crudService: CrudService) { }

  ngOnInit() {
    this.getApplications();
  }

  public generate() {

    if (this.appSelect.id_application === 'CALENDULA') {
      console.log('data calendula');
      this.dinamicDataService.getDataCalendula(this.numberData).subscribe(res => {
        console.log(JSON.stringify(res));
        this.dataGenerated = JSON.stringify(res, undefined, 4);
      })

    } else if (this.appSelect.id_application === 'HABITICA_WEB') {
      this.dinamicDataService.getDataHabitica(this.numberData).subscribe(res => {
        console.log(JSON.stringify(res));
        this.dataGenerated = JSON.stringify(res, undefined, 4);
      })
    } else {
      this.dataGenerated = "La aplicación no se encuentra configurada para obtener datos";
    }
    this.clean();
  }

  /**
   * 
   */
  private clean() {    
    this.appSelect = null;
    this.numberData = null;

  }

  public selectAplication() {
    console.log(this.appSelect);
  }


  public getApplications() {
    this.crudService.getApplications().subscribe(res => {
      this.applicationList = res['applications'];
    })

  }

}
