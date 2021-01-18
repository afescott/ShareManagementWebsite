import { Component, OnInit} from '@angular/core';
import {DataService} from '../Services/dataService.service'
import { HttpClient } from '@angular/common/http';
import { IShare, Share } from '../ClassObjects/share.component';
import { DatePipe } from '@angular/common';
import { IFund } from '../ClassObjects/fund.component';


@Component({
    templateUrl: './sharePortfolio.component.html',
    styleUrls: ['./sharePortfolio.component.css']
    
  
    
  })

export class SharePortfolio implements OnInit
    {
     public pageTitle = 'Welcome';
     public shares : IShare[]= [];

     public funds : IFund[]= [];
     errorMessage : string;

     public basicInfoCalculated = false;

   constructor  (private  client : DataService, private datepipe: DatePipe) 
   {
    
   }


  ngOnInit(): void {


    this.client.retrieveShares().subscribe({ 
      next : shares => {
      
        this.shares = shares;
           
      },
      error : err => this.errorMessage = err,
    });

    this.client.retrieveFunds().subscribe({ 
      next : funds => {
      
        this.funds = funds;
           
      },
      error : err => this.errorMessage = err,
    });

//     var shareTest = new Share;
// shareTest.shareId = 1;
//     shareTest.cashFlow = 255;
//     this.shares.push(shareTest);
    
    // subscriberfs
    //                            (success => {if (success) {this.companyRelevantInfo = this.client.shareRelevantShareInfo;}})
  }

  configureShares()
  {
   
  }


  registerShare() : void {
    console.log("trying");
    
    // this.client.retrieveShares().subscribe(success => {if (success) {this.companyRelevantInfo = this.client.shareRelevantShareInfo;}});
  }

 

    public companyRelevantInfo = [];

    }


    
      

    

