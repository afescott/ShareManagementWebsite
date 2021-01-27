import { Component, OnInit} from '@angular/core';
import {DataService} from '../Services/dataService.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    templateUrl: './fundInformation.component.html'
    // styleUrls: ['./company.component.css']
    
  })

  export class FundInformation implements OnInit
    { 

        constructor(private client : DataService, private route :ActivatedRoute) {

         }

         ngOnInit(): void {
            var investmentType =  this.route.snapshot.paramMap.get('isFund');
            let id = + this.route.snapshot.paramMap.get('id');
          


         }



    } 