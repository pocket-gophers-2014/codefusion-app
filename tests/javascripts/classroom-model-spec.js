describe ( "Classroom Model (CurrentClassroom)", function() {
  it("should start with nil values", function() {
    expect(App.CurrentClassroom.classroom_code).toEqual( "" )
  })

  it("should have its classroom_code update with updateAttributes method", function() {
    App.CurrentClassroom.updateAttributes({classroom_code: "abdcefg"})
    expect(App.CurrentClassroom.classroom_code).toEqual( "abdcefg" )
  })

  it("should have its file_name update with updateAttributes method", function() {
    App.CurrentClassroom.updateAttributes({file_name: "test.html"})
    expect(App.CurrentClassroom.file_name).toEqual( "test.html" )
  })

  it("should have its file_content update with updateAttributes method", function() {
    App.CurrentClassroom.updateAttributes({file_content: "def method end"})
    expect(App.CurrentClassroom.file_content).toEqual( "def method end" )
  })

  it("should have its classroom_code be nil if no code passed", function() {
    App.CurrentClassroom.updateAttributes({})
    expect(App.CurrentClassroom.classroom_code).toEqual( "" )
  })

})

