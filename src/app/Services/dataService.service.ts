import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from "rxjs/operators";
import {Company} from "../ClassObjects/company.component"
import { ICompetitor } from '../ClassObjects/competitor.component';
import { IFund } from '../ClassObjects/fund.component';
import {Share, IShare} from "../ClassObjects/share.component"
import { IShareStrategy } from '../ClassObjects/shareStrategy.component';

@Injectable({
    providedIn: 'root' //makes visible for dependency injection
  })
  export class DataService implements OnInit {
    
    ngOnInit(): void {
   
    }
      public shareRelevantShareInfo = [];

      public companyRelevantInfo = [];

  
    constructor(private http: HttpClient) { }


  retrieveCompany ()
  {
    return this.http.get("http://192.168.1.65:7000/api/values").pipe(
       map((data:any[]) => { console.log(data);
            this.companyRelevantInfo = data; return true;}));
  }

  retrieveShares () : Observable<IShare[]>
  {
    return this.http.get<IShare[]>('http://localhost:1000/api/share/getShares').pipe(
       tap(data => console.log('ALL: ' + JSON.stringify(data))),
       catchError(this.handleError));
  }

  
  retrieveFunds () : Observable<IFund[]>
  {
    return this.http.get<IFund[]>('http://localhost:1000/api/fund/getFunds').pipe(
       tap(data => console.log('ALL: ' + JSON.stringify(data))),
       catchError(this.handleError));
  }

  retrieveCompetitors (shareId : number) : Observable<Share[]>
  {
    return this.http.get<Share[]>('http://localhost:1000/api/competitor/getCompetitors/' + shareId, ).pipe(
       tap(data => console.log('ALL: ' + JSON.stringify(data))),
       catchError(this.handleError));
  }

  registerCompetitors (shareId : Number, competitorId :  Number ) : boolean
  {
     var competitorModel :any = {ShareId : shareId, CompetitorId : competitorId};
    
  

    // competitorModel.shareId = shareId;
    // competitorModel.competitorId = competitorId;

    this.http.post('http://localhost:1000/api/competitor/createCompetitor' , competitorModel).subscribe(
      success => {
        return true;
      });

return true;;
  }


  registerShare (share : IShare) : boolean
  {
    var response = false;

    this.http.post('http://localhost:1000/api/share/createShare' , share).subscribe(
      success => {
        return true;
      });

return true;;
  }

  registerFund (fund : IFund) : boolean
  {
    this.http.post('http://localhost:1000/api/fund/createFund' , fund).subscribe(
      success => {
        return true;
      });

return true;;
  }

  registerShareStrategy (share : IShareStrategy, toUpdate : boolean) : boolean
  {
    var response = false;

    this.http.put('http://localhost:1000/api/sharestrategy/createShareStrategy/' + String(toUpdate) , share).subscribe(
      success => {
        catchError(this.handleError);
        return true;
      });

return true;;
  }

  retrieveShareStrategies (shareId : number) : Observable<any>
  {
    return this.http.get<any>('http://localhost:1000/api/shareStrategy/' + shareId).pipe(
      tap(data => console.log('ALL: ' + JSON.stringify(data))),
      catchError(this.handleError),
      
      
      );
  }
    
    
    // return this.http.get("192.168.1.65:7000/api/share/getShares").pipe(
    //    map((data:any[]) => { console.log(data);
    //         this.shareRelevantShareInfo = data; return true;}));
    private handleError (err : HttpErrorResponse){

let errorMessage = "";
if (err.error instanceof ErrorEvent) {
  errorMessage = 'An error occured: ${err.error.message}';
} else {

  errorMessage = 'server returned code: ${err.status}, error message is ${err.message}';

}
console.error(errorMessage);

return throwError(errorMessage);

    }

 

  }