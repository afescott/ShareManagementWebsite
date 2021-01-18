import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
         <a>{{title}} </a>
         <br> 
         <a> Remember angular sometimes throws html exceptions/visual bugs just change a character</a>
        <ul class='nav nav-pills'>

        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/loadShares']"><h1>Load current shares</h1></a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/registerShare']"><h1>Register a share </h1></a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/competitors']"><h1>Competitors </h1></a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/shareStrategy']"><h1>Register a company </h1></a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/sellShare']"><h1>Selling a share</h1></a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/yetToDecideShare']"><h1>Yet to sell</h1></a></li>
        </ul>
    <router-outlet></router-outlet>
     <div class='container'>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
// <router-outlet></router-outlet>
export class AppComponent {
  
constructor  ( ){
/**
 * name
 */

  }
  title = 'Angular: Getting Started';

  companyName :string = "SAFAFA";
 
}
