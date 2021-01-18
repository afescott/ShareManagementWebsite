import './share.component';
import { IShare } from './share.component';
export interface ICompetitor {
share : IShare;
shareCheckbox: boolean;
 }

 export class Competitor implements ICompetitor{
     share: IShare;
     shareCheckbox: boolean;
     rivalryShareOfMarket : DoubleRange;


 }
 