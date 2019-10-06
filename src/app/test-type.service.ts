import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestTypeService {

  types = [
    {name:"E2E"}      
  ]

  subTypesMobile = [
    {name:"random"},
    {name:"BDD"},    
  ]

  subTypesWeb = [    
    {name:"headless"}
  ]

  constructor() { }


  getTypes() {
    return this.types;
  }

  getSubTypesMobile() {
    return this.subTypesMobile;
  }

  getSubTypesWeb() {
    return this.subTypesWeb;
  }
}
