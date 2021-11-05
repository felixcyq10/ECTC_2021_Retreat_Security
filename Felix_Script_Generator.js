function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Generate_Schedule_Template')
      .addItem('withCurrentWeekSelected', 'menuItem1')
      .addToUi();
}

function menuItem1() {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  
  if (SpreadsheetApp.getCurrentCell()) {
      var cell = SpreadsheetApp.getCurrentCell()
      var row = cell.getRow()
      
      
      var date = activeSheet.getRange(row, 1).getDisplayValue()
      var date2 = activeSheet.getRange(row + 1, 1).getDisplayValue()
      
  }
  
 // var titles = ["Worship Leader", "PPT", "Instrument", "Singspiration Translator", "Scripture Sharing", "Translator", "Passage"];
  
  var titles = activeSheet.getRange(1, 2, 1, 10).getDisplayValues();  
  
  var separator = '-----------------------------------------\n '
  
  var thisweek = activeSheet.getRange(row, 2, 1, titles[0].length).getDisplayValues();                                   
  
  var message1 =  "Schedule Planned for this Friday: " + date + "\n ";  
  
  for (var i = 0; i < titles[0].length; i+=1) {
    
    if (thisweek[0][i]){
    
    message1 += "\n " + titles[0][i] + ": [" + thisweek[0][i] + "]\n " 
    
    }
 
  }
  
  var nextweek = activeSheet.getRange(row + 1, 2, 1, titles[0].length).getDisplayValues();                                   
  
  var message2 = "Schedule Planned for next Friday: " + date2 + "\n ";  
  
  for (var i = 0; i < titles[0].length; i+=1) {
    
    if (nextweek[0][i]){
    
    message2 += "\n " + titles[0][i] + ": [" + nextweek[0][i] + "]\n" 
    
    }
 
  }
 
  var ui = SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
  
  ui.alert(separator + message1 + separator + message2 + separator);
  //ui.alert(titles[0][1] + titles[0][2])
 
   
}