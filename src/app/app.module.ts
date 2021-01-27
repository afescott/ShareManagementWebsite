import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import {SharePortfolio} from './ShareManagement/sharePortfolio.component'
import { ShareJustification } from './company/shareJustification.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DataService } from './Services/dataService.service';
import {SharePurchase} from './stockPurchase/stockPurchase.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { Competitors } from './Competitor/competitors.component'
import { DatePipe } from '@angular/common';
import { FundInformation } from './FundInformation/fundInformation.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShareJustification,
    Competitors,
    SharePurchase,
    SharePortfolio
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'loadShares', component: SharePortfolio },
      { path: 'competitors/:id', component: Competitors },
      { path: 'shareStrategy/:id/:isFund', component: ShareJustification },
      { path: 'fundInformation/:id', component: FundInformation },
      { path: 'registerShare', component: SharePurchase },
      { path: 'sellShare', component: WelcomeComponent },
      { path: 'yetToDecideShare', component: WelcomeComponent }
     
    ]),
    BrowserAnimationsModule
  ],
  providers: [ //List of things that can be injected into the system
    DataService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
