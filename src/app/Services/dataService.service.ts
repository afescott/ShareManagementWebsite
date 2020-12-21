import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root' //makes visible for dependency injection
  })
  export class DataService {
    public shareRelevantShareInfo = [];

      public companyRelevantInfo = [];


      
    constructor(private http: HttpClient) {

   
      // var mysql = require('mysql');

      // var con = mysql.createConnection({
      //   host: "localhost",
      //   user: "yourusername",
      //   password: "yourpassword"
      // });
      
      // con.connect(function(err) {
      //   if (err) throw err;
      //   console.log("Connected!");
      // });
     }
    /*
    */
      //nodeJs is required
    
    // If using Stackblitz, replace the url with this line
    // because Stackblitz can't find the api folder.
    // private productUrl = 'assets/products/products.json';
    private productUrl = 'api/products/products.json';
   
  loadProducts ()
  {
    return this.http.get("").pipe(map(( data:any[]) =>{

      return true; //if full success
    }))
  }

  }