import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { appDto } from '../data/AppDto';

@Component({
  selector: 'app-admin-application',
  templateUrl: './admin-application.component.html',
  styleUrls: ['./admin-application.component.css']
})
export class AdminApplicationComponent implements OnInit {

  nameApp;
  url;
  desc;
  typesApp;
  applicationList;

  webSelect: boolean;
  mobileSelect: boolean
  typeAppSelect;

  fileToUpload: File = null;



  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.webSelect = false;
    this.mobileSelect = false;
    this.getApplications();
    this.typesApp = this.crudService.getTypesApp();

  }

  /**
   * Crea una nueva aplicacion
   */
  public create() {

    var data:appDto = new appDto();
    data.apk = "";
    data.desc = this.desc;
    data.id_application = this.nameApp.toUpperCase();
    data.name = this.nameApp;
    data.type = this.typeAppSelect;
    data.url = this.url;

    this.crudService.createApp(data).subscribe(res => {
      console.log('resutado-repor: ', res['applications']);
      this.getApplications();
      this.clean();
    });
  }

  /**
   * limpia el formulario
   */
  private clean() {
    this.desc = null;
    this.nameApp = null;
    this.typeAppSelect = null;
    this.url = null;
  }

  public getApplications() {
    this.crudService.getApplications().subscribe(res => {
      this.applicationList = res['applications'];
    })

  }

  /**
   * 
   */
  public selectTypeAplication() {
    console.log(this.typeAppSelect);
    if (this.typeAppSelect === "WEB") {
      this.webSelect = true;
      this.mobileSelect = false;
    } else {
      this.mobileSelect = true;
      this.webSelect = false;
    }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
