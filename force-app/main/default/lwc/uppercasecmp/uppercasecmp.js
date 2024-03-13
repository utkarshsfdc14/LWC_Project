import { LightningElement } from 'lwc';

export default class Uppercasecmp extends LightningElement {

    firstName = '';
    lastName = '';
    
    handlechange(event){

        const field = event.target.Name;
        if(field === 'fname'){
            this.firstName = event.target.value;
        }else if (field === 'lname'){
            this.lastName = event.target.value;
        }
    }
    get uppercasedFullName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}