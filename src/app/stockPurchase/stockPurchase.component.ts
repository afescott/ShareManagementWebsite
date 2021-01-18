import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { DataService } from '../Services/dataService.service';
import {IShare, Share} from '../ClassObjects/share.component'
import {IFund} from '../ClassObjects/fund.component'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    templateUrl: './stockPurchase.component.html',
    styleUrls: ['./stockPurchase.component.css']
  })

export class SharePurchase 
    {
      shareId : number;
        sharePrice : number;
        companyName :string;
        dividendYield: number;
        marketCap : number;
        priceEarningsRatio : number;
        baseShareInfoCalculated : boolean;
        netDebt : number;
        cashFlow : number;
  

        public marketCapFlag = false;
        public netDebtFlag = false;
        public dividendFlag = false;
        public yetToIpoFlag = false;
        public assetsFlag = false;
        public etfFlag = false;
        public fundFlag = false;
        public operatingCashFlowFlag = false;

        public assetsTotal : number;

        variants:[{'id':0, name:'set of 6 traits'}, {'id':1, name:'5 complete sets'}]

        constructor  (private service : DataService)
        {
          // service.registerShare()
        }


btnIsFund()
{
  this.marketCapFlag = !this.marketCapFlag;
  this.netDebtFlag = !this.netDebtFlag;
  this.fundFlag = !this.fundFlag;
  this.operatingCashFlowFlag = !this.operatingCashFlowFlag;
  this.assetsFlag = !this.assetsFlag;
}

        btnRegisterShare()
        {
         if (!this.fundFlag)
         {
         var share : IShare = {shareId : this.shareId, cashFlow : this.cashFlow, marketCap : this.marketCap, priceEarningsRatio : this.priceEarningsRatio, companyName : this.companyName,
          netDebt : this.netDebt, sharePrice : this.sharePrice, dividendYield : this.dividendYield, netChangeCash : this.netDebt, shareEntryDate : new Date(Date.now()) , YetToIpo : this.yetToIpoFlag};
          var response = this.service.registerShare(share); 
        }
         else {
         
          var fund : IFund = {FundId : this.shareId, FundName : this.companyName, DividendYield : this.dividendYield, NetAssets : this.assetsTotal, YetToIpo : this.yetToIpoFlag, IsEtf : this.etfFlag }
          // var response = this.service.registerShare(fund);
          var response = this.service.registerFund(fund); 

        }


         //fogire

          if (response) {
            this.baseShareInfoCalculated = !this.baseShareInfoCalculated;
          }

           
        }

        // btnRegisterCompany() 
        // {
        //   this.verifyInputs();
        //   if (this.stringMetricsMet && this.floatMetricsMet)
        //   {
           
        //   }
        //   else 
        //   {
  
        //   }
        // }
       
  
    ngOnInit(): void {
      // this.service.loadProducts().subscribe(success => {if (success)
      // this.shareRelevantShareInfo = this.service.shareRelevantShareInfo, this.companyRelevantInfo = this.service.companyRelevantInfo })
    }
  
  
  //   onChangeFloat()
  // {
  //   var floatArray = [this.priceEarningsRatio, this.turnoverLastYear, this.turnoverThisYear, this.netDebt, this.marketCap];
  
  //   var floatCheck = floatArray.filter(x => x > 0);
  
  //   if (floatCheck.length == floatArray.length)
  //   {
  //     this.floatMetricsMet = true;
  //   } 
  
    
   
  // }
  
  // onChangeString()
  // {
  //   if (this.companyName != undefined)
  //   {
  //     this.stringMetricsMet = true;
     
  //   }
  // }
  
  // verifyInputs()
  // {
  //  if (this.stringMetricsMet && this.floatMetricsMet)
  //  {
  //   this.basicInfoCalculated = true;
  //  }
  // }
    }
    