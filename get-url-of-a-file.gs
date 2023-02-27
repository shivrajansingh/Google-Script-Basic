function getFileUrl(fileId)
{
 var file = DriveApp.getFileById(fileId);
 var url =  file.getUrl();
 return url;
}  

