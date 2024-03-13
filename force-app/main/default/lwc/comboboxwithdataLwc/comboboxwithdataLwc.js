import { LightningElement,track } from 'lwc';
import getAccountForsearchbox from '@salesforce/apex/SearchboxwithdatatableClass.getAccountForsearchbox'
import getcontacts from '@salesforce/apex/SearchboxwithdatatableClass.getcontacts'

const columns =[
    {label : 'Contacts Name', fieldName : 'Name'},
    {label : 'Contacts Email', fieldName: 'Email'},
]

export default class SearchboxwithdatatableLWC extends LightningElement {
 

@track value='';
@track optionsArray= [];
@track cardvisible = false;
@track data = [];
@track columns = columns;

get Options(){
    return this.optionsArray;
}


connectedCallback(){
    getAccountForsearchbox()
    .then(Response=>{
        let arr =[];
        for(var i=0; i<Response.length;i++){
            arr.push({label : Response[i].Name, value : Response[i].id})
        }
        this.optionsArray = arr;
    })
}

handleChangedValue(Event){

    this.cardvisible= true;
    this.value = Event.detail.value;
}
}