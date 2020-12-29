export interface IShare {
   ShareId : string;
   DividendYield : number;
   SharePrice : number;
   ShareEntryDate : number;

}

export class Share implements IShare {

 constructor (public name : string,
    public priceEarningsRatio : number,
    public dividend : number) {

    }
   ShareId: string;
   DividendYield: number;
   SharePrice: number;
   ShareEntryDate: number;
   

  
   
   CalculatePostTaxProfit (netDebt : number, turnoverLastTwelveMonths : number) //naming conflictions may cause issues
   {
  
   }

 calculatePriceSalesRatio()
 {
     
 }
}