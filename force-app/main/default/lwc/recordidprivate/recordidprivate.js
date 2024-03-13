import { LightningElement,api } from 'lwc';

export default class Recordidprivate extends LightningElement {

    message= 'Public Property';
   @api recordId;
}