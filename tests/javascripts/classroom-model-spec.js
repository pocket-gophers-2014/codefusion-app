describe ( "Classroom Model ", function() {
  it("should start with nil values", function() {
    expect(App.Classroom.classroomCode).toEqual(null)
  })

  it("should have its classroomCode update with set method", function() {
    App.Classroom.set('classroomCode', "abdcefg")
    expect(App.Classroom.classroomCode).toEqual( "abdcefg" )
  })

})

