import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './employee/employee.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TablesComponent } from './tables/tables.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TopFiveComponent } from './top-five/top-five.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TablesComponent,
    LeftbarComponent,
    HeaderComponent,
    TopFiveComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule, 
    ChartsModule,
    BsDropdownModule, 
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
