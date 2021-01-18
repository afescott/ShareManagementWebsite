import { Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {DataService} from '../Services/dataService.service'
import { IShare, Share } from '../ClassObjects/share.component';
import {ActivatedRoute} from '@angular/router'
import {IShareStrategy} from '../ClassObjects/shareStrategy.component'
import { share } from 'rxjs/operators';
@Component({
    templateUrl: './shareJustification.component.html',
    styleUrls: ['./shareJustification.component.css']
    
  })

export class ShareJustification implements OnInit
    {
      public shareRelevantShareInfo = [];
      public companyRelevantInfo = [];

      public basicInfoCalculated = false;
    
    public isFund : string;

    
     
   
      private shareId : number;
      errorFlag : boolean;

      public shareStrategyImport : IShareStrategy;

      public whyAtThisTimeJustification : string = "";
      public whySharePriceGoingToIncreaseJustification : string = "";
      public planForMinorSharePriceDropJustification : string = "";
      public planForMajorSharePriceDropJustification : string = "";


      public navbarCollapsed = true;
      
      constructor(private client : DataService, private route :ActivatedRoute) {

         this.companyRelevantInfo = client.companyRelevantInfo;
         this.shareRelevantShareInfo = client.shareRelevantShareInfo;
      }
      
  ngOnInit(): void {
    this.isFund =  this.route.snapshot.paramMap.get('isFund');

    let id = + this.route.snapshot.paramMap.get('id');
 
    this.shareId = id;
    
     this.client.retrieveShareStrategies(id).subscribe(x => {
     
   this.client.retrieveShares
 
         this.whyAtThisTimeJustification = x.timingJustification;
        
        this.whySharePriceGoingToIncreaseJustification = x.planForIncrease;
        
        this.planForMinorSharePriceDropJustification = x.planFor20Decrease;
        
        this.planForMajorSharePriceDropJustification = x.planFor40Decrease;

       } , error => this.errorFlag = true )

//  var asf =  this.client.retrieveShareStrategies(id).subscribe({
//      next: shareInfo => {
//        var afs = shareInfo;



//        this.whyAtThisTimeJustification = this.shareStrategyImport.TimingJustification;
       
//        this.whySharePriceGoingToIncreaseJustification = this.shareStrategyImport.PlanForIncrease;
       
//        this.planForMinorSharePriceDropJustification = this.shareStrategyImport.PlanFor20Decrease;
       
//        this.planForMajorSharePriceDropJustification = this.shareStrategyImport.PlanFor40Decrease;
//       //  console.log(this.shareStrategyImport.shareId);
//        this.errorFlag = false;
//       } ,
//      error : err => {this.errorFlag = true;
//      }
//    } );
       
   

  }


Jim() {
  this.navbarCollapsed = !this.navbarCollapsed;
}


  submitShareStrategy() {
var response = false;

   this.basicInfoCalculated = !this.basicInfoCalculated;

   

   var share : IShareStrategy = {ShareFundId : this.shareId, TimingJustification : this.whyAtThisTimeJustification,PlanFor40Decrease : this.planForMajorSharePriceDropJustification, PlanFor20Decrease : this.planForMinorSharePriceDropJustification, PlanForIncrease : this.whySharePriceGoingToIncreaseJustification};
   

   if (this.errorFlag)
   {
 response = this.client.registerShareStrategy(share, false)
   } else
   {

     response = this.client.registerShareStrategy(share, true)
   }



if (response) {

}
  
  }

    }