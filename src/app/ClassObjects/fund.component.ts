export interface IFund {
   FundId : number;
   FundName : string;
   DividendYield : number;
   NetAssets : number;
   YetToIpo : boolean;
   IsEtf : boolean;

}

export class Fund implements IFund {
   FundId: number;
   FundName: string;
   DividendYield: number;
   NetAssets: number;
   YetToIpo: boolean;
   IsEtf: boolean;
}