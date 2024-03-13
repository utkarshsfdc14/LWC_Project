trigger Taskacc on Task (after update) {
    if (Trigger.isAfter && Trigger.isUpdate) {
        TaskAccountUpdate.handletask(Trigger.new, Trigger.oldMap);
    }
}