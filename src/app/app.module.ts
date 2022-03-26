import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DateutilityComponent } from './dateutility/dateutility.component';
import { ArrayutilityComponent } from './arrayutility/arrayutility.component';
import { DateService } from './services/date.service';
import { ArrayService } from './services/array.service';

@NgModule({
  declarations: [
    AppComponent,
    DateutilityComponent,
    ArrayutilityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [DateService,ArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
