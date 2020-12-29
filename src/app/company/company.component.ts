import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit} from '@angular/core';
import { fromEventPattern } from 'rxjs';
import {map} from 'rxjs/operators'
import { Pipe, PipeTransform } from '@angular/core';
import {DataService} from '../Services/dataService.service'
@Component({
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
    
  })

export class Company implements OnInit
    {
      public shareRelevantShareInfo = [];
      public companyRelevantInfo = [];

       companyName;

      priceEarningsRatio;
      turnoverThisYear;
      turnoverLastYear;
      netDebt;
      marketCap;

      private floatMetricsMet : boolean;
      private stringMetricsMet : boolean;

      public basicInfoCalculated = false;
      
      constructor(private service : DataService) {

         this.companyRelevantInfo = service.companyRelevantInfo;
         this.shareRelevantShareInfo = service.shareRelevantShareInfo;
      }

      btnRegisterCompany() 
      {
        this.verifyInputs();
        if (this.stringMetricsMet && this.floatMetricsMet)
        {
         this.jimFranker();
        }
        else 
        {

        }
      }

      jimFranker() : void {
      


      }
    

  ngOnInit(): void {
    // this.service.loadProducts().subscribe(success => {if (success)
    // this.shareRelevantShareInfo = this.service.shareRelevantShareInfo, this.companyRelevantInfo = this.service.companyRelevantInfo })
  }


  onChangeFloat()
{
  var floatArray = [this.priceEarningsRatio, this.turnoverLastYear, this.turnoverThisYear, this.netDebt, this.marketCap];

  var floatCheck = floatArray.filter(x => x > 0);

  if (floatCheck.length == floatArray.length)
  {
    this.floatMetricsMet = true;
  } 

  
 
}

onChangeString()
{
  if (this.companyName != undefined)
  {
    this.stringMetricsMet = true;
    asfafafafn
  }
}

verifyInputs()
{
 if (this.stringMetricsMet && this.floatMetricsMet)
 {
  this.basicInfoCalculated = true;
 }
}

    }