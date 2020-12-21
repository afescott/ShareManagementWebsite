import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import {SharePortfolio} from './ShareManagement/sharePortfolio.component'
import { StockPurchase } from './stockPurchase/stockPurchase.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DataService } from './Services/dataService.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StockPurchase
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'loadShares', component: SharePortfolio },
      { path: 'buyShare', component: StockPurchase },
      { path: 'sellShare', component: WelcomeComponent },
      { path: 'yetToDecideShare', component: WelcomeComponent }
    ]),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ //List of things that can be injected into the system
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
