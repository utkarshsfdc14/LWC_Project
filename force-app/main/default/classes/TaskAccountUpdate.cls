public with sharing class TaskAccountUpdate {
    

    public static void handletask(List<Task> newTasksList, Map<Id, Task> triggeroldMap) {
        List<Account> accountsUpdate = new List<Account>();
        
        for (Task task : newTasksList) {
            Task oldTask = triggeroldMap.get(task.Id);
            if (task.Status == 'Completed' && oldTask.Status != 'Completed') {
                accountsUpdate.add(new Account(
                    Id = task.WhatId,
                    Active__c = true, 
                    Description = task.Description 
                ));
            }
        }
        
        if (!accountsUpdate.isEmpty()) {
            update accountsUpdate;
        }
    }
}