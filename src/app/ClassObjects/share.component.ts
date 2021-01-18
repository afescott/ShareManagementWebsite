export interface IShare {
   shareId : number;
   companyName : string;
   dividendYield : number;
   sharePrice : number;
   netChangeCash : number;
   cashFlow: number;
priceEarningsRatio : number;
netDebt: number;
marketCap: number;
shareEntryDate : Date;
YetToIpo : boolean;
}

export class Share implements IShare {
   shareEntryDate: Date;
   shareId : number;
   priceEarningsRatio: number;
   companyName: string;
   netChangeCash: number;
   cashFlow: number;
   dividendYield: number;
   sharePrice: number;
   netDebt: number;
   marketCap: number;
   YetToIpo : boolean;
   

  
   
   CalculatePostTaxProfit (netDebt : number, turnoverLastTwelveMonths : number) //naming conflictions may cause issues
   {
  
   }

 calculatePriceSalesRatio()
 {
     
 }
}