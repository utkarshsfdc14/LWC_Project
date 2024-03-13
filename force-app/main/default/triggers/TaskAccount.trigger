trigger TaskAccount on Account (after insert) {
    if (Trigger.isAfter && Trigger.isInsert) {
        AccountTaskCreation.handleTaskInsert(Trigger.new);
    }
}