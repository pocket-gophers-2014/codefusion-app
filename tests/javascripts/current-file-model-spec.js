describe ( "Current File Model ", function() {

  it("should start content with 'Content loading...'", function() {
    expect(App.CurrentFile.fileContent).toEqual("Content loading...")
  })

  it("should start filename as null", function() {
    expect(App.CurrentFile.fileName).toEqual( null )
  })

  it("should be able to set its filename", function() {
    App.CurrentFile.set("fileName","gemfile")
    expect(App.CurrentFile.fileName).toEqual( "gemfile" )
  })

  beforeEach(function() {
    folder = { files: [{file_name: "gemfile", file_content: "require information"}] }
  })

  it("should be able to update its content when fileName matches newcontent filename", function() {
    App.CurrentFile.set("fileName","gemfile")
    App.CurrentFile.parseForNewContent(folder)
    expect(App.CurrentFile.fileContent).toEqual("require information")
  })

  it("should note have its contents update when the currentFile is not passed", function() {
    App.CurrentFile.set("fileName","gemfile")
    App.CurrentFile.parseForNewContent(folder)

    var newFolder = { files: [{file_name: "somethingelse", file_content: "other info"}] }
    App.CurrentFile.parseForNewContent(newFolder)

    expect(App.CurrentFile.fileContent).toEqual("require information")
  })

})

