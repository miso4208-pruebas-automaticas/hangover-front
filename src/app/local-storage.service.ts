import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'test-list';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  

  anotherTodolist = [];
     constructor(
      @Inject(LOCAL_STORAGE) private storage: StorageService) { 

       }


     
     public getReport() {
       return this.storage.get(STORAGE_KEY) || [];
     } 

     public storeOnLocalStorage(data:any): void {          
          // get array of tasks from local storage
          const testList = this.storage.get(STORAGE_KEY) || [];
          // push new task to array
          testList.push(data);
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, testList);
          console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
     }


  
}
