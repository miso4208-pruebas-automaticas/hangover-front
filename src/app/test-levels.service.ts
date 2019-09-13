import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestLevelsService {

  levels = [
    {name:"Unidad"},
    {name:"Integracion"},
    {name:"Sistema"},
    {name:"Aceptacion"}
  ]

  constructor() { }

  public getLevels() {
    return this.levels;
  } 

}
