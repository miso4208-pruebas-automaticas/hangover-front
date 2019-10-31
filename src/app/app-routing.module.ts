import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ExecuteTestComponent} from './execute-test/execute-test.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminComponent } from './admin/admin.component';
import { AdminApplicationComponent } from './admin-application/admin-application.component';



const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},  
  {path: "execute-test", component: ExecuteTestComponent},
  {path: "reports", component: ReportsComponent},
  {path: "admin", component: AdminComponent},
  {path: "admin-application", component: AdminApplicationComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
