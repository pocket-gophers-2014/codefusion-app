describe ( "Note Holder Model", function() {
  beforeEach(function() {
    // fileName = "gemspec"
    // content = "require version"
  })

  it("should start as an empty hash", function() {
    expect(App.NoteHolder.notes).toEqual( {} )
  })

  it("should update notes when passed additional content into hash", function() {
    App.CurrentFile.set('fileName',"gemspec")
    App.NoteHolder.notes[App.CurrentFile.fileName] = "requirements"
    expect(App.NoteHolder.notes["gemspec"]).toEqual( "requirements" )
  })

})

