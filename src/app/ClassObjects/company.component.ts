export interface ICompany {
 
   PreTaxProfitThisYear : number;
   PreTaxProfitLastYear : number;
   NetDebt : number;
   MarketCap : number;
}
export class Company implements ICompany {

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
 