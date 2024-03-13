import { LightningElement, wire, api } from 'lwc';
import getAccountsWithContacts from '@salesforce/apex/AccountControllerr.getAccountsWithContacts';

const columns = [
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    
    { label: 'Contacts', fieldName: 'Contacts', type: 'text' },
];

export default class AccountTable extends LightningElement {
    @api recordId; 
    accountData = [];
    columns = columns;

    @wire(getAccountsWithContacts, { accountId: '$recordId' })
    wiredAccounts({ error, data }) {
        if (data) {
            
            this.accountData = data.map(account => ({
                Id: account.Id,
                Name: account.Name,
                Industry: account.Industry,
                Phone: account.Phone,
                Website: account.Website,
                Contacts: account.Contacts.length 
            }));
        } else if (error) {
            console.error(error);
        }
    }

    handleRowAction(event) {
        
        console.log('Row action:', event.detail.action.name);
    }
}
