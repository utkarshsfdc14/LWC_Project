public class SearchboxwithdatatableClass {
    @AuraEnabled
        public static list<account> getAccountForcombobox(){
            List<Account> accountList=[select id,Name from Account];
            return accountList;
        }
        @AuraEnabled
        public static list<contact> getcontacts(string selectedAccountId){
            List<contact> contactList =[Select id,name,Email,AccountId from contact where AccountId =:selectedAccountId];
            return contactList;
        }
    }