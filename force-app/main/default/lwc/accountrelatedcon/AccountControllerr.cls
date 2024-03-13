public with sharing class AccountControllerr {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsWithContacts(Id accountId) {
        return [
            SELECT Id, Name,
                (SELECT Id, FirstName, LastName, Email FROM Contacts)
            FROM Account
            WHERE Id = :accountId
        ];
    }
}
