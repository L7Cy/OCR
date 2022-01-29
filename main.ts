function main() {
  const fileList = Drive.Children.list(folderId)
  for (let i = 0; i < fileList.items.length; i++){
    const fileId = fileList.items[i].id
    const image = Drive.Files.copy(resource, fileId, option)
    const text = DocumentApp.openById(image.id).getBody().getText()
    sheet.appendRow([text])
    Drive.Files.remove(image.id)
    Drive.Files.remove(fileId)
  }
}
