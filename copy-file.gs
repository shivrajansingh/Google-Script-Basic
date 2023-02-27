function copyFiles(sourceFileId, targetFolderId)
{
  var file_ = DriveApp.getFileById(sourceFileId)
  var folder = DriveApp.getFolderById(targetFolderId); 
  folder.addFile(file_);
}
