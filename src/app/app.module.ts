import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';





import { AppComponent } from './app.component';
import { ABCModule } from './modules/abc/abc.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ABCModule,
    HttpClientModule,
    FormsModule
   

 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
