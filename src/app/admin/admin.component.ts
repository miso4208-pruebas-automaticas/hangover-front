import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { BaseDto } from '../data/BaseDto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  levelsList;

  desc;
  name;

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.getLevels();
  }


  public getLevels() {
    this.crudService.getLevels().subscribe(res => {
      this.levelsList = res['levels'];
    })
  }

  public create() {
    var data:BaseDto = new BaseDto();
    data.name = this.name;
    data.description = this.desc;


    this.crudService.createLevel(data).subscribe(res => {
      this.getLevels();
      this.clean();
    })
  }

  private clean() {
    this.name = null;
    this.desc = null;
  }

}
