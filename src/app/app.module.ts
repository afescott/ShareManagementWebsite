import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import {SharePortfolio} from './ShareManagement/sharePortfolio.component'
import { Company } from './company/company.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DataService } from './Services/dataService.service';
import {SharePurchase} from './stockPurchase/stockPurchase.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Company,
    SharePurchase,
    SharePortfolio
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'loadShares', component: SharePortfolio },
      { path: 'registerCompany', component: Company },
      { path: 'registerShare', component: SharePurchase },
      { path: 'sellShare', component: WelcomeComponent },
      { path: 'yetToDecideShare', component: WelcomeComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [ //List of things that can be injected into the system
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
