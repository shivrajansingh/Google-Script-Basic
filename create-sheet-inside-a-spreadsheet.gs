function createNewSheet(sheetId,sheetName)
{
var ss =  SpreadsheetApp.openById(sheetId);
var newSheet = ss.insertSheet();
newSheet.setName(sheetName);  
}


//to delete a sheet 
function deleteSheet(sheetId,sheetName)
{
  var ss =  SpreadsheetApp.openById(sheetId);
  var sheet = ss.getSheetByName(sheetName);
  sheet.deleteSheet(sheetName);
}
