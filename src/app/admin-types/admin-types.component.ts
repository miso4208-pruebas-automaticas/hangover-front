import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { BaseDto } from '../data/BaseDto';

@Component({
  selector: 'app-admin-types',
  templateUrl: './admin-types.component.html',
  styleUrls: ['./admin-types.component.css']
})
export class AdminTypesComponent implements OnInit {

  typesList;

  desc;
  name;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getTypes();
  }


  public getTypes() {
    this.crudService.getTypes().subscribe(res => {
      this.typesList = res['types'];
    })
  }


  public create() {
    var data: BaseDto = new BaseDto();
    data.name = this.name;
    data.description = this.desc;


    this.crudService.createTypes(data).subscribe(res => {
      this.getTypes();
      this.clean();
    })
  }

  private clean() {
    this.name = null;
    this.desc = null;
  }

}
