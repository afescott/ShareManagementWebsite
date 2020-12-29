export interface ICompany {
 
   PreTaxProfitThisYear : number;
   PreTaxProfitLastYear : number;
   NetDebt : number;
   MarketCap : number;
}
export class Company implements ICompany {
Name:string;
PreTaxProfitThisYear: number;
PreTaxProfitLastYear: number;
NetDebt: number;
MarketCap: number;

calculateNetDebtProfitDifference (netDebt : number, turnoverLastTwelveMonths : number) : boolean//naming conflictions may cause issues
{
 var profitMultiplied : Number;
 profitMultiplied = netDebt * 3;
  
 if (netDebt > profitMultiplied)
 { 
return false;
 }
 return true;
}

}
 