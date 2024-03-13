public with sharing class AccountContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccountContactData() {
        return [SELECT Id, Name, Email, Account.Name FROM Contact];
    }
}