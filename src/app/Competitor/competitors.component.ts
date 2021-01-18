import { Component} from '@angular/core';
import {DataService} from '../Services/dataService.service'
import {ActivatedRoute} from '@angular/router'
import { IShare, Share } from '../ClassObjects/share.component';
import { share } from 'rxjs/operators';
import { ICompetitor, Competitor } from "../ClassObjects/competitor.component";

@Component({
    templateUrl: './competitors.component.html'
    // styleUrls: ['./company.component.css']
    
  })

export class Competitors 
    { 
      private shareId : number;
      // public shares : IShare[];
      public shares : any[] = [];

public cunt : IShare[];

      public confirmedCompetitors : Share[] = []; 


      public shareCheckboxes : boolean[]= [];
    
public competitors : any[];


      errorMessage : string;

      

      public navbarCollapsed = true;
      constructor(private route :ActivatedRoute, private  client : DataService) {
      
      }
      



  ngOnInit(): void {
    

    let id = + this.route.snapshot.paramMap.get('id');
    this.shareId = id;



this.competitors = [];

    this.client.retrieveShares().subscribe({ 
      next : shares => {

        this.client.retrieveCompetitors(this.shareId).subscribe({ 
          next : competitorShares => {
var tempCompetitor : Share;
             shares.forEach(elementShare => {
              var isCompetitor = false;
             competitorShares.forEach(elementCompetitor => {    
               tempCompetitor = elementCompetitor; 
                  if (elementCompetitor.shareId == elementShare.shareId)
                  {
                     isCompetitor = true;
                  }
               })
              if (!isCompetitor)
              {
               this.shares.push(elementShare);
              } else {
                this.confirmedCompetitors.push(tempCompetitor);
              }

             })
            
            // sharesa.forEach(element => {
            //  var f = this.shares.filter(x => x.shareId !== element.shareId);
             
          
             
            // })
                 
            
            
          },
          error : err => this.errorMessage = err,
        });
           
           if (this.competitors.length === 0)
           {
             this.shares = shares;
           }

         this.shares.forEach(element => 
        {
        element.shareCheckbox = false;
      // var length = this.competitors.push(element); 
        }
         )        
      },
      error : err => this.errorMessage = err,
    });




       
     


}




submitShares() : void
{

  this.shares = this.shares.filter(x => x.shareCheckbox == true);


if (this.shares.length != 0) {
  this.shares.forEach(element => {
    this.client.registerCompetitors(this.shareId, element.shareId);
  })
  } else {
  
}


}
  Jim() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  

  }