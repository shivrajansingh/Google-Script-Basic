function deleteFile(fileId)
{
var file = DriveApp.getFileById(fileId);
file.setTrashed(true);
}
// the above function will trash the will and after the 30 days file will deleted permanently. 

