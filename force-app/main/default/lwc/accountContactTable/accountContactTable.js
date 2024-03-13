
import { LightningElement, wire, track } from 'lwc';
import getAccountsWithContacts from '@salesforce/apex/AccountContactController.getAccountsWithContacts';

const ACCOUNT_COLUMNS = [
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Contact Name', fieldName: 'Contacts', type: 'text',
        cellAttributes: { alignment: 'left' },
        typeAttributes: { iconName: 'standard:contact', iconAlternativeText: 'Contact' },
        sortable: false
    },
];

export default class AccountContactTable extends LightningElement {
    @track accountColumns = ACCOUNT_COLUMNS;
    @track accountData;

    @wire(getAccountsWithContacts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accountData = this.mapData(data);
        } else if (error) {
            console.error('Error retrieving data: ', error);
        }
    }

    mapData(data) {
        return data.map(account => ({
            Id: account.Id,
            Name: account.Name,
            Contacts: account.Contacts ? account.Contacts.reduce((contactNames, contact) =>
                contactNames + contact.FirstName + ' ' + contact.LastName + ', ', '').slice(0, -2) : ''
        }));
    }
}
