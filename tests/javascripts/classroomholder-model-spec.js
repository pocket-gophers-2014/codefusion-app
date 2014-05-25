describe ( "ClassroomHolder Model", function() {
  beforeEach(function() {
    fireBaseResponse = {classroom_code: "abcdef", file_content: "def method puts rao end", file_name: "text.js"}
  })

  it("should start as an empty array", function() {
    expect(App.ClassroomHolder.content.length).toEqual( 0 )
  })

  it("should have its contents updated with the updateContent method", function() {
    App.ClassroomHolder.updateContent(fireBaseResponse)
    expect(App.ClassroomHolder.content.length).toEqual(1)
  })

  it("should have its classroom_code updated accurately", function() {
    App.ClassroomHolder.updateContent(fireBaseResponse)
    expect(App.ClassroomHolder.content[0].classroom_code).toEqual("abcdef")
  })

  it("should have its file_content updated accurately", function() {
    App.ClassroomHolder.updateContent(fireBaseResponse)
    expect(App.ClassroomHolder.content[0].file_content).toEqual("def method puts rao end")
  })

  it("should have its file_name updated accurately", function() {
    App.ClassroomHolder.updateContent(fireBaseResponse)
    expect(App.ClassroomHolder.content[0].file_name).toEqual("text.js")
  })

})

