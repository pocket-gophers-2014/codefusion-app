describe ( "Classroom Files Model", function() {
  beforeEach(function() {
    fileName = "gemspec"
    content = "require version"
  })

  it("should start as an empty hash", function() {
    expect(App.ClassroomFiles.files).toEqual( {} )
  })

  it("should update its files with the updateRoomFiles function", function() {
    App.ClassroomFiles.updateRoomFiles(fileName,content)
    expect(App.ClassroomFiles.files[fileName]).toEqual( content )
  })

})

