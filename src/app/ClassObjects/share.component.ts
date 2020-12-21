export interface IShare {
   Name : string;
   PriceEarningsRatio : number;
   Dividend : number;

}

export class Share implements IShare {

 constructor (public Name : string,
    public priceEarningsRatio : number,
    public dividend : number,
    public turnoverLastTwelveMonths : number,
    public netDebt : number,
    public marketCap : number) {

    }
   PriceEarningsRatio: number;
   Dividend: number;
   PreTaxProfitThisYear: number;
   TurnoverLastYear: number;
   NetDebt: number;
   MarketCap: number;
   
   CalculatePostTaxProfit (netDebt : number, turnoverLastTwelveMonths : number) : boolean//naming conflictions may cause issues
   {
  
   }

 calculatePriceSalesRatio()
 {
     
 }
}