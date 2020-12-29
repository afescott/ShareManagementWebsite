import { Component, OnInit} from '@angular/core';
import {DataService} from '../Services/dataService.service'
import { HttpClient } from '@angular/common/http';
import { Share } from '../ClassObjects/share.component';


@Component({
    templateUrl: './sharePortfolio.component.html',
    styleUrls: ['./sharePortfolio.component.css']
    
  
    
  })

export class SharePortfolio implements OnInit
    {
     public pageTitle = 'Welcome';
     public shares : Share[]= [];
     errorMessage : string;

     public basicInfoCalculated = false;

   constructor  (private  client : DataService) 
   {
     
   }


  ngOnInit(): void {

    this.client.retrieveShares().subscribe({ 
      next : shares => {
        this.shares = shares;
      },
      error : err => this.errorMessage = err,
    });

    // subscriberfs
    //                            (success => {if (success) {this.companyRelevantInfo = this.client.shareRelevantShareInfo;}})
  }

showCompanyInfo () {
  this.basicInfoCalculated = !this.basicInfoCalculated;

}

  registerShare() : void {
    console.log("trying");
    
    // this.client.retrieveShares().subscribe(success => {if (success) {this.companyRelevantInfo = this.client.shareRelevantShareInfo;}});
  }

 

    public companyRelevantInfo = [];

    }


    
      

    

