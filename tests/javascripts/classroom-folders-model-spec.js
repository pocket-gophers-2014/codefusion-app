describe ( "Classroom Folders Model", function() {
  beforeEach(function() {
    // fileName = "gemspec"
    // content = "require version"
    folder = { files: [0,1,2,3]}
  })

  it("should have variable fileCount start as 0", function() {
    expect(App.ClassroomFolders.fileCount).toEqual( 0 )
  })

  it("should have variable previousFileCount start as 0", function() {
    expect(App.ClassroomFolders.previousFileCount).toEqual( 0 )
  })

  it("should update its previousFileCount when files given", function() {
    App.ClassroomFolders.checkForFileAdditionsOrRemovals(folder)
    expect(App.ClassroomFolders.previousFileCount).toEqual( 4 )
  })
  it("should update its fileCount when files given", function() {
    App.ClassroomFolders.checkForFileAdditionsOrRemovals(folder)
    expect(App.ClassroomFolders.fileCount).toEqual( 4 )
  })
  it("should maintain its file count when additional files are given", function() {
    App.ClassroomFolders.checkForFileAdditionsOrRemovals(folder)
    App.ClassroomFolders.checkForFileAdditionsOrRemovals(folder)
    expect(App.ClassroomFolders.fileCount).toEqual( 4 )
  })
})

