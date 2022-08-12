function calendarTest() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    "events"
  );
  const data = sheet.getRange("A2:C229").getValues();
  const eventCal = CalendarApp.getCalendarById("ID_here");
  for (let i = 0; i < 229; i++) {
    const eventName = data[i][0]
    const eventDate = new Date(data[i][1])
    const desc = data[i][2]
    event = eventCal.createAllDayEvent(eventName,eventDate, {description: desc})
  }
}
