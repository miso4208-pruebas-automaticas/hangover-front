import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ExecuteTestComponent } from './execute-test/execute-test.component';
import { ReportsComponent } from './reports/reports.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AdminComponent } from './admin/admin.component';
import { AdminApplicationComponent } from './admin-application/admin-application.component';
import { AdminTypesComponent } from './admin-types/admin-types.component';
import { DinamicDataComponent } from './dinamic-data/dinamic-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,    
    ExecuteTestComponent, ReportsComponent, AdminComponent, AdminApplicationComponent, AdminTypesComponent, DinamicDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
