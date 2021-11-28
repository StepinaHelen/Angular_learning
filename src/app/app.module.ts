import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { JsonInfoComponent } from './json-info/json-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientInfoComponent,
    JsonInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
