public with sharing class AccountTaskCreation {
    public static void handleTaskInsert(List<Account> newAccountsList) {
        List<Task> tasksToInsertList = new List<Task>();
        
        for (Account acc : newAccountsList) {
            Task newTask = new Task();
            newTask.Subject = 'Review Account - ' + acc.AccountNumber;
            newTask.ActivityDate = Date.today().addDays(7);
            newTask.OwnerId = acc.OwnerId;
            newTask.Status = 'Not Started';
            newTask.WhatId = acc.Id;
            tasksToInsertList.add(newTask);
        }
        
        if (!tasksToInsertList.isEmpty()) {
            insert tasksToInsertList;
        }
    }
}