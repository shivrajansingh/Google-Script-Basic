function renameFile(fileId,newName)
{
var file = DriveApp.getFileById(fileId);
file.setName(newName);
}
// the above function will rename the file. 
