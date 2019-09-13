import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestTypeService {

  types = [
    {name:"E2E"},
    {name:"headless"},
    {name:"random"},
    {name:"Aceptacion"}
  ]

  constructor() { }


  getTypes() {
    return this.types;
  }
}
