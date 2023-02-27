//this function will create a new spreadsheet and return the id of that spreadsheet. 
function createSpreadsheet(sheetName)
{
 var file = SpreadsheetApp.create(sheetName);
 var file_id = file.getId();
 return file_id;
}
  
  
//The below function will create a new Google Doc and return doc id

function createDoc(docName)
{
 var newDoc = DocumentApp.create(docName);
 var docId =  newDoc.getId();
 return docId;
}