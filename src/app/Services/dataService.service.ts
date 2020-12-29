import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from "rxjs/operators";
import {Company} from "../ClassObjects/company.component"
import {Share} from "../ClassObjects/share.component"

@Injectable({
    providedIn: 'root' //makes visible for dependency injection
  })
  export class DataService implements OnInit {
    
    ngOnInit(): void {
   
    }
      public shareRelevantShareInfo = [];

      public companyRelevantInfo = [];

      public shares : any[]= [
        {
         "price" : "fsafaf",
         "productName" : "garden centre",
         "productCode" : "garden centre",
        }, 
         {
           "price": "fuck",
           "productName" : "garden centre",
           "productCode" : "garden centre",
          }
        ];
      
    constructor(private http: HttpClient) { }

share : any;

  retrieveCompany ()
  {
    return this.http.get("http://192.168.1.65:7000/api/values").pipe(
       map((data:any[]) => { console.log(data);
            this.companyRelevantInfo = data; return true;}));
  }

  retrieveShares () : Observable<Share[]>
  {
    return this.http.get<Share[]>('http://192.168.1.65:7000/api/share/getShares').pipe(
       tap(data => console.log('ALL: ' + JSON.stringify(data))),
       catchError(this.handleError)
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

  registerShare (share : Share)
  {
    return this.http.post<Share>("http://192.168.1.65:7000/api/values", this.shares).subscribe({
      next: shareData => 
          this.share = shareData,
      error: error => 
          console.error('There was an error!', error)
      })
    }
  

  registerCompany (company : Company)
  {
    this.http.post("http://192.168.1.65:7000/api/values", this.shares);
  }

  }