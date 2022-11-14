import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseCatalogComponent } from './pages/house-catalog/house-catalog.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HouseComponent } from './component/house/house.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HouseCatalogComponent,
    NavBarComponent,
    HouseComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
